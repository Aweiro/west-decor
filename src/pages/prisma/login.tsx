/* eslint-disable react-refresh/only-export-components */
import React, { FormEvent, useState } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { isAdminAuthenticated } from '@/lib/adminAuth';

type LoginPageProps = {
  nextPath: string;
};

const inputClass =
  'admin-input';

const LoginPage = ({ nextPath }: LoginPageProps) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data?.error || 'Не вдалося увійти');
        return;
      }

      await router.replace(nextPath || '/prisma');
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Не вдалося увійти';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Prisma Login</title>
        <link rel='stylesheet' href='/admin.css' />
      </Head>
      <div className='admin-shell' id='admin-root'>
        <div className='container admin-inner py-8'>
          <div className='max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1.1fr_1fr] items-stretch'>
            <section className='admin-panel p-8 lg:p-10 flex flex-col justify-between'>
              <div>
                <span className='inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-wider text-sky-200'>
                  Prisma Admin
                </span>
                <h1 className='admin-title text-4xl text-white mt-4'>Вхід в адмін панель</h1>
                <p className='admin-subtitle text-base mt-3 max-w-md'>
                  Єдиний простір для керування товарами, варіаціями та замовленнями магазину.
                </p>
              </div>
              <div className='mt-8 rounded-2xl border border-[#2a3a58] bg-[#0b1424]/80 p-5'>
                <p className='text-sm text-[#b9c8e7]'>
                  Після входу відкриється остання сторінка, на яку ти переходив в адмінці.
                </p>
              </div>
            </section>

            <section className='admin-panel p-6 lg:p-8'>
              <h2 className='admin-title text-xl text-white mb-2'>Авторизація</h2>
              <p className='admin-subtitle text-sm mb-6'>
                Увійдіть, щоб керувати товарами та замовленнями.
              </p>

              <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='username' className='admin-label'>
                Логін
              </label>
              <input
                id='username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor='password' className='admin-label'>
                Пароль
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={inputClass}
                required
              />
            </div>

            {error && (
              <p className='rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300'>
                {error}
              </p>
            )}

            <button
              type='submit'
              disabled={loading}
              className='w-full px-4 py-2.5 rounded-xl border border-sky-400/40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:brightness-110 disabled:opacity-60 transition-all font-semibold shadow-lg shadow-blue-900/30'
            >
              {loading ? 'Вхід...' : 'Увійти'}
            </button>
          </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

const normalizeNextPath = (value: unknown) => {
  if (typeof value !== 'string') {
    return '/prisma';
  }

  return value.startsWith('/') ? value : '/prisma';
};

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async (context) => {
  const nextPath = normalizeNextPath(context.query.next);

  if (isAdminAuthenticated(context.req)) {
    return {
      redirect: {
        destination: nextPath,
        permanent: false,
      },
    };
  }

  return {
    props: { nextPath },
  };
};

export default LoginPage;
