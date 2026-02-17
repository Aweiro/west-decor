import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createAdminSessionToken,
  setAdminSessionCookie,
  validateAdminCredentials,
} from '@/lib/adminAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Метод не дозволений' });
  }

  const { username, password } = req.body as {
    username?: string;
    password?: string;
  };

  if (!username || !password) {
    return res.status(400).json({ error: "Логін і пароль обов'язкові" });
  }

  const isValid = await validateAdminCredentials(username, password);

  if (!isValid) {
    return res.status(401).json({ error: 'Невірний логін або пароль' });
  }

  const token = createAdminSessionToken(username);
  setAdminSessionCookie(res, token);

  return res.status(200).json({ ok: true });
}
