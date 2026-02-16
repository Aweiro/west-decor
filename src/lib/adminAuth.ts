import crypto from 'node:crypto';
import type { IncomingMessage, ServerResponse } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

type SessionPayload = {
  sub: string;
  exp: number;
};

const toBase64Url = (value: string) =>
  Buffer.from(value)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

const fromBase64Url = (value: string) => {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padding = normalized.length % 4;
  const base64 = padding ? normalized.padEnd(normalized.length + (4 - padding), '=') : normalized;
  return Buffer.from(base64, 'base64').toString('utf8');
};

const getSessionSecret = () => {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not configured');
  }

  return secret;
};

const signPayload = (payloadPart: string) => {
  const signature = crypto.createHmac('sha256', getSessionSecret()).update(payloadPart).digest('base64');

  return signature.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
};

const timingSafeEqual = (left: string, right: string) => {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
};

const parseCookies = (cookieHeader?: string) => {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(';').reduce<Record<string, string>>((acc, chunk) => {
    const index = chunk.indexOf('=');

    if (index === -1) {
      return acc;
    }

    const key = chunk.slice(0, index).trim();
    const value = chunk.slice(index + 1).trim();

    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
};

const getTokenFromRequest = (req: Pick<IncomingMessage, 'headers'>) =>
  parseCookies(req.headers.cookie)[SESSION_COOKIE_NAME];

const verifyToken = (token?: string | null): SessionPayload | null => {
  if (!token) {
    return null;
  }

  const [payloadPart, signaturePart] = token.split('.');

  if (!payloadPart || !signaturePart) {
    return null;
  }

  const expected = signPayload(payloadPart);

  if (!timingSafeEqual(expected, signaturePart)) {
    return null;
  }

  try {
    const payload = JSON.parse(fromBase64Url(payloadPart)) as SessionPayload;

    if (!payload?.sub || !payload?.exp) {
      return null;
    }

    if (payload.exp <= Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
};

const appendSetCookie = (res: Pick<ServerResponse, 'getHeader' | 'setHeader'>, cookie: string) => {
  const existing = res.getHeader('Set-Cookie');

  if (!existing) {
    res.setHeader('Set-Cookie', cookie);
    return;
  }

  if (Array.isArray(existing)) {
    res.setHeader('Set-Cookie', [...existing, cookie]);
    return;
  }

  res.setHeader('Set-Cookie', [String(existing), cookie]);
};

export const isAdminAuthenticated = (req: Pick<IncomingMessage, 'headers'>) =>
  Boolean(verifyToken(getTokenFromRequest(req)));

export const createAdminSessionToken = (username: string) => {
  const payload: SessionPayload = {
    sub: username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const payloadPart = toBase64Url(JSON.stringify(payload));
  const signaturePart = signPayload(payloadPart);

  return `${payloadPart}.${signaturePart}`;
};

export const setAdminSessionCookie = (
  res: Pick<ServerResponse, 'getHeader' | 'setHeader'>,
  token: string,
) => {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  const cookie = `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL_SECONDS}${secure}`;

  appendSetCookie(res, cookie);
};

export const clearAdminSessionCookie = (res: Pick<ServerResponse, 'getHeader' | 'setHeader'>) => {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  const cookie = `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;

  appendSetCookie(res, cookie);
};

export const requireAdminApiAuth = (req: NextApiRequest, res: NextApiResponse) => {
  if (isAdminAuthenticated(req)) {
    return true;
  }

  res.status(401).json({ error: 'Unauthorized' });
  return false;
};

export const validateAdminCredentials = async (username: string, password: string) => {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const passwordHash =
    process.env.ADMIN_PASSWORD_HASH ||
    (process.env.ADMIN_PASSWORD?.startsWith('$2') ? process.env.ADMIN_PASSWORD : undefined);
  const plainPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || (!passwordHash && !plainPassword)) {
    return false;
  }

  if (!timingSafeEqual(username, expectedUsername)) {
    return false;
  }

  if (passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }

  return timingSafeEqual(password, plainPassword as string);
};
