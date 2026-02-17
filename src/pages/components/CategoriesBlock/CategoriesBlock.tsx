'use client';

import React from 'react';
import styles from './CategoriesBlock.module.scss';
import { CategoryType } from './../../../types/CategorieType';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  categories: CategoryType[];
}

export const CategoriesBlock: React.FC<Props> = ({ categories }) => {
  const CategorieCard = ({ categorie }: { categorie: CategoryType }) => {
    const imageSrc = categorie.photo.startsWith('/') ? categorie.photo : `/${categorie.photo}`;

    return (
      <div className={styles.categories__card}>
        <Link
          href={categorie.url}
          className={styles.categories__img}
          style={{ backgroundColor: categorie.bgColor }}
        >
          <Image width={250} height={250} src={imageSrc} alt={categorie.title} />
        </Link>
        <div className={styles.categories__details}>
          <h4 className={styles.categories__name}>{categorie.title}</h4>
          <p className={`body-text ${styles.categories__description}`}>{categorie.count} моделей</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2>Обирай за категорією</h2>
      <div className={styles.categories}>
        {categories?.map((categorie) => (
          <CategorieCard key={categorie.title} categorie={categorie} />
        ))}
      </div>
    </>
  );
};

export default CategoriesBlock;
