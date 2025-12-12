import React from 'react';
import Link from 'next/link'; // 1. Імпортуємо Link
import styles from './ProductsList.module.scss';
import { Product } from '../../types/ProductType';
import { ProductCard } from '../ProductCard';

interface Props {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product['itemId']) => void;
  isAdmin?: boolean;
}

const AdminProductRow = ({
  product,
  onEdit,
  onDelete,
}: {
  product: Product;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}) => {
  // Генеруємо посилання на сторінку товару
  // Змініть '/product/' на ваш реальний шлях, наприклад `/catalog/${product.itemId}`
  const productLink = `/${product.category}/${product.itemId}`;

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 bg-[#151925] border border-[#2E3345] p-4 rounded-xl shadow-sm hover:border-[#3E455B] transition-colors group'>
      {/* 1. Картинка (зменшена) - ТЕПЕР ПОСИЛАННЯ */}
      <div className='shrink-0 relative'>
        <Link
          href={productLink}
          target='_blank'
          className='w-16 h-16 rounded-lg bg-[#0B0E14] border border-[#2E3345] overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity'
        >
          {product.image ? (
            <img src={product.image} alt={product.name} className='h-full object-cover' />
          ) : (
            <span className='text-xs text-gray-600'>No img</span>
          )}
        </Link>
      </div>

      {/* 2. Інформація (ID, Назва, Категорія) */}
      <div className='flex-1 min-w-0 text-center sm:text-left'>
        <div className='flex items-center justify-center sm:justify-start gap-2 mb-1'>
          <span className='text-xs font-mono text-gray-500 bg-[#2A2F3E] px-1.5 py-0.5 rounded border border-[#3E455B]'>
            #{product.itemId}
          </span>
          <span className='text-xs text-[#9353d3] font-medium uppercase tracking-wide'>
            {product.category}
          </span>
        </div>

        {/* Назва товару - ТЕПЕР ПОСИЛАННЯ */}
        <Link
          href={productLink}
          target='_blank'
          className='group-hover:text-blue-400 transition-colors'
        >
          <h3 className='text-white font-semibold truncate hover:underline' title={product.name}>
            {product.name}
          </h3>
        </Link>

        <div className='text-gray-400 text-sm mt-0.5'>
          ${product.price}
          {product.fullPrice > product.price && (
            <span className='text-gray-600 line-through ml-2 text-xs'>${product.fullPrice}</span>
          )}
        </div>
      </div>

      {/* 3. Кнопки дій */}
      <div className='flex items-center gap-3 shrink-0 opacity-100 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity'>
        {/* EDIT */}
        <button
          onClick={() => onEdit?.(product)}
          className='flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/10 text-blue-500 border border-blue-600/20 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all active:scale-95'
          title='Редагувати'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 00 2 2h11a2 2 0 00 2-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
            />
          </svg>
          <span className='hidden sm:inline'>Edit</span>
        </button>

        {/* DELETE */}
        <button
          onClick={() => onDelete?.(product.itemId)}
          className='flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 text-sm font-medium rounded-lg hover:bg-red-500 hover:text-white transition-all active:scale-95'
          title='Видалити'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
          <span className='hidden sm:inline'>Delete</span>
        </button>
      </div>
    </div>
  );
};

export const ProductsList = ({ isAdmin = false, products, onEdit, onDelete }: Props) => {
  if (isAdmin) {
    return (
      <div className='flex flex-col gap-3'>
        {products.map((product) => (
          <AdminProductRow
            key={product.itemId}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles['products-list']}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className={styles['products-list__card']} />
      ))}
    </div>
  );
};
