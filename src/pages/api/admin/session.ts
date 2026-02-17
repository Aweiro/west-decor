import type { NextApiRequest, NextApiResponse } from 'next';
import { isAdminAuthenticated } from '@/lib/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Метод не дозволений' });
  }

  return res.status(200).json({ authenticated: isAdminAuthenticated(req) });
}
