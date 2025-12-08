import React from 'react';
import styles from './ProductsList.module.scss';
import { Product } from '../../types/ProductType';
import { ProductCard } from '../ProductCard';

interface Props {
  products: Product[];
}

export const ProductsList = ({ products, onEdit, onDelete }: Props) => {
  return (
    <div className={styles['products-list']}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className={styles['products-list__card']}>
          <button
            style={{ alignSelf: 'center', width: '100%', backgroundColor: 'gray' }}
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.itemId)}
            className='px-2 py-1 bg-red-600 text-white rounded'
          >
            Delete
          </button>
        </ProductCard>
      ))}
    </div>
  );
};
