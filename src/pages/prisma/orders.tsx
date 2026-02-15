import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Loader } from '@/components/Loader';

type OrderItem = {
  itemId: string;
  name: string;
  image?: string;
  category?: string;
  price: number;
  quantity: number;
  sum: number;
};

type Order = {
  id: number;
  name: string;
  phone: string;
  comment?: string | null;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
};

const sectionClass =
  'bg-gradient-to-br from-[#171C29] to-[#0B0E14] p-6 rounded-2xl shadow-xl shadow-black/20 border border-[#2E3345]';
const statusLabels: Record<string, string> = {
  new: 'Нове',
  in_progress: 'В роботі',
  done: 'Виконано',
  canceled: 'Скасовано',
};
const statusStyles: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  in_progress: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
  done: 'bg-green-500/10 text-green-300 border-green-500/30',
  canceled: 'bg-red-500/10 text-red-300 border-red-500/30',
};
const statusDots: Record<string, string> = {
  new: 'bg-blue-400',
  in_progress: 'bg-yellow-400',
  done: 'bg-green-400',
  canceled: 'bg-red-400',
};
const normalizeImageSrc = (src?: string) => {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('/')) return src;
  return `/${src}`;
};

export const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [activeStatus, setActiveStatus] = useState<string>('all');
  const [openStatusId, setOpenStatusId] = useState<number | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch('/api/orders?admin=true');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || 'Failed to fetch orders');
        }

        setOrders(Array.isArray(data) ? data : []);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Помилка завантаження';
        setError(message);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId: number, nextStatus: string) => {
    setUpdatingId(orderId);

    try {
      const response = await fetch('/api/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: orderId, status: nextStatus }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Не вдалося оновити статус.');
      }

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status: nextStatus } : order,
        ),
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Помилка оновлення статусу';
      setError(message);
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleStatusMenu = (orderId: number) => {
    setOpenStatusId((prev) => (prev === orderId ? null : orderId));
  };

  const handleStatusBlur = (event: React.FocusEvent<HTMLDivElement>, orderId: number) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && event.currentTarget.contains(nextTarget)) {
      return;
    }
    setOpenStatusId((prev) => (prev === orderId ? null : prev));
  };

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/admin.css' />
      </Head>
      <div className='container' id='admin-root'>
        <Breadcrumbs />

        <div className='mb-6 flex flex-wrap gap-3'>
          <a
            href='/prisma'
            className='px-4 py-2 bg-[#2A2F3E] text-white rounded-lg hover:bg-[#3E455B] transition-colors text-sm font-medium border border-[#3E455B]'
          >
            Товари
          </a>
          <a
            href='/prisma/orders'
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium border border-blue-500'
          >
            Замовлення
          </a>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className='text-red-400'>{error}</div>
        ) : orders.length === 0 ? (
          <div className='text-gray-400'>Немає замовлень</div>
        ) : (
          <div className='space-y-6'>
            <div className='flex flex-wrap items-center gap-2'>
              {[
                { key: 'all', label: `Усі (${orders.length})` },
                {
                  key: 'new',
                  label: `Нові (${orders.filter((o) => o.status === 'new').length})`,
                },
                {
                  key: 'in_progress',
                  label: `В роботі (${orders.filter((o) => o.status === 'in_progress').length})`,
                },
                {
                  key: 'done',
                  label: `Виконані (${orders.filter((o) => o.status === 'done').length})`,
                },
                {
                  key: 'canceled',
                  label: `Скасовані (${orders.filter((o) => o.status === 'canceled').length})`,
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type='button'
                  onClick={() => setActiveStatus(tab.key)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                    activeStatus === tab.key
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-blue-500 shadow-sm shadow-blue-900/30'
                      : 'bg-[#0B0E14] text-gray-300 border-[#2E3345] hover:border-[#3E455B] hover:bg-[#151925]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {(activeStatus === 'all'
              ? orders
              : orders.filter((order) => order.status === activeStatus)
            ).map((order) => (
              <div key={order.id} className={sectionClass}>
                <div className='flex flex-wrap items-start justify-between gap-4 border-b border-[#2E3345] pb-4 mb-4'>
                  <div>
                    <div className='text-white font-semibold text-lg tracking-wide'>
                      Замовлення #{order.id}
                    </div>
                    <div className='text-gray-400 text-sm'>
                      {new Date(order.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className='text-right space-y-2'>
                    <div className='bg-[#0B0E14] border border-[#2E3345] rounded-xl px-3 py-2'>
                      <div className='text-gray-200 font-medium'>{order.name}</div>
                      <div className='text-gray-400 text-sm'>{order.phone}</div>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                      <div
                        className='relative'
                        tabIndex={0}
                        onBlur={(event) => handleStatusBlur(event, order.id)}
                      >
                        <button
                          type='button'
                          disabled={updatingId === order.id}
                          onClick={() => toggleStatusMenu(order.id)}
                          className={`inline-flex items-center gap-2 border text-xs px-3 py-1 rounded-full transition-all disabled:opacity-60 cursor-pointer hover:shadow-sm hover:shadow-black/30 ${
                            statusStyles[order.status] || 'border-[#2E3345] text-gray-300'
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${statusDots[order.status] || 'bg-gray-400'}`}
                          />
                          <span>{statusLabels[order.status] || order.status}</span>
                          <span className='text-[10px] text-gray-400'>▼</span>
                        </button>
                        {openStatusId === order.id && (
                          <div className='absolute right-0 mt-2 w-44 rounded-xl border border-[#2E3345] bg-[#0B0E14] shadow-lg shadow-black/40 z-10'>
                            {Object.keys(statusLabels).map((statusKey) => (
                              <button
                                key={statusKey}
                                type='button'
                                onClick={() => {
                                  setOpenStatusId(null);
                                  handleStatusChange(order.id, statusKey);
                                }}
                                className={`w-full text-left px-3 py-2 text-xs transition-colors bg-transparent ${
                                  order.status === statusKey
                                    ? 'bg-[#151925] text-white'
                                    : 'text-gray-300 hover:bg-[#151925] hover:text-white'
                                }`}
                              >
                                <span className='inline-flex items-center gap-2 w-full'>
                                  <span
                                    className={`h-2 w-2 rounded-full ${statusDots[statusKey] || 'bg-gray-400'}`}
                                  />
                                  {statusLabels[statusKey]}
                                  {order.status === statusKey && (
                                    <span className='ml-auto text-xs text-gray-400'>✓</span>
                                  )}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {order.comment && (
                  <div className='mb-4 text-sm text-gray-300 bg-[#0B0E14] border border-[#2E3345] rounded-xl px-3 py-2'>
                    Коментар: {order.comment}
                  </div>
                )}

                <div className='grid grid-cols-1 gap-3'>
                  {Array.isArray(order.items) &&
                    order.items.map((item, index) => {
                      const imageSrc = normalizeImageSrc(item.image);
                      const itemHref =
                        item.category && item.itemId
                          ? `/${item.category}/${item.itemId}`
                          : '';

                      return (
                        <a
                          key={`${order.id}-${item.itemId}-${index}`}
                          href={itemHref || undefined}
                          className='group flex flex-wrap items-center gap-4 bg-[#0B0E14] border border-[#2E3345] rounded-2xl px-4 py-3 text-sm text-gray-200 hover:border-[#4B5369] hover:bg-[#101521] transition-all'
                        >
                          <div className='w-16 h-16 rounded-xl overflow-hidden border border-[#2E3345] bg-[#151925] flex items-center justify-center'>
                            {imageSrc ? (
                              <img
                                src={imageSrc}
                                alt={item.name}
                                className='w-full h-full object-contain group-hover:scale-105 transition-transform'
                              />
                            ) : (
                              <span className='text-xs text-gray-500'>No image</span>
                            )}
                          </div>
                          <div className='flex-1 min-w-[180px]'>
                            <div className='font-semibold text-white'>
                              {index + 1}. {item.name}
                            </div>
                            <div className='text-xs text-gray-400'>ID: {item.itemId}</div>
                            {!itemHref && (
                              <div className='text-xs text-gray-500'>Посилання недоступне</div>
                            )}
                          </div>
                          <div className='text-right min-w-[120px]'>
                            <div className='text-gray-300'>
                              {item.quantity} x {item.price}
                            </div>
                            <div className='text-white font-semibold'>{item.sum}</div>
                          </div>
                        </a>
                      );
                    })}
                </div>

                <div className='mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-300'>
                  <span className='px-3 py-1 rounded-full border border-[#2E3345] bg-[#0B0E14]'>
                    Позицій: {order.items?.length ?? 0}
                  </span>
                  <span className='px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-sm shadow-blue-900/30'>
                    Сума: {order.total} грн
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersPage;
