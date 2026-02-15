import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/services/prismaClient';

type OrderItem = {
  itemId: string;
  name: string;
  image?: string;
  category?: string;
  price: number;
  quantity: number;
  sum: number;
};

const allowedStatuses = ['new', 'in_progress', 'done', 'canceled'] as const;
type OrderStatus = (typeof allowedStatuses)[number];

const formatOrderMessage = (payload: {
  name: string;
  phone: string;
  comment?: string | null;
  items: OrderItem[];
  total: number;
}) => {
  const lines = [
    'Нове замовлення',
    '',
    `Ім'я: ${payload.name}`,
    `Телефон: ${payload.phone}`,
  ];

  if (payload.comment) {
    lines.push(`Коментар: ${payload.comment}`);
  }

  lines.push('', 'Товари:');
  payload.items.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.name} (${item.itemId}) x${item.quantity} = ${item.sum}`,
    );
  });
  lines.push('', `Сума: ${payload.total}`);

  return lines.join('\n');
};

const sendTelegramMessage = async (message: string) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return;
  }

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { name, phone, comment, items, total } = req.body as {
        name?: string;
        phone?: string;
        comment?: string | null;
        items?: OrderItem[];
        total?: number;
      };

      if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required.' });
      }

      if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'Order items are required.' });
      }

      const order = await prisma.order.create({
        data: {
          name,
          phone,
          comment: comment || null,
          items,
          total: Number(total) || 0,
          status: 'new',
        },
      });

      try {
        const message = formatOrderMessage({
          name,
          phone,
          comment,
          items,
          total: Number(total) || 0,
        });
        await sendTelegramMessage(message);
      } catch (error) {
        console.error('Failed to send Telegram message:', error);
      }

      return res.status(201).json(order);
    }

    if (req.method === 'GET') {
      const { admin } = req.query;

      if (admin !== 'true') {
        return res.status(403).json({ error: 'Forbidden' });
      }

      const orders = await prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json(orders);
    }

    if (req.method === 'PATCH') {
      const { id, status } = req.body as { id?: number; status?: OrderStatus };

      if (!id || !status || !allowedStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status update.' });
      }

      const updated = await prisma.order.update({
        where: { id },
        data: { status },
      });

      return res.status(200).json(updated);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Orders API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
