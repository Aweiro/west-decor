import React, { useCallback, useMemo } from 'react';
import styles from './HomePage.module.scss';
import { BannerSlider } from '../components/BannerSlider';
import { ProductsSlider } from '../components/ProductsSlider';
import { ProductsType } from '../types/ProductsType';
import { Loader } from '../components/Loader';
import { CategoriesBlock } from './components/CategoriesBlock/CategoriesBlock';
import { CategoryType } from '../types/CategorieType';
import { Product } from '../types/ProductType';
import { useSortedProducts } from '../hooks/useSortedProducts';
import { useCategoriesRTK } from '../hooks/useCategoriesRTK';

export default function HomePage() {
  const { categorie: products, loading, error } = useCategoriesRTK(ProductsType.Products);

  const sortByBiggestDiscount = useCallback(
    (a: Product, b: Product) => b.fullPrice - b.price - (a.fullPrice - a.price),
    [],
  );

  const sortByNewModels = useCallback((a: Product, b: Product) => b.year - a.year, []);

  const productsNewModels = useSortedProducts(products, sortByNewModels);
  const productsHotPrices = useSortedProducts(products, sortByBiggestDiscount);

  const allCategories = useMemo(() => {
    const categoryMap: Record<string, CategoryType> = {
      [ProductsType.Phones]: {
        count: 0,
        url: '/decors',
        title: 'Decors',
        photo: 'img/category-phones.jpg',
        bgColor: '#6D6474',
      },
      [ProductsType.Tablets]: {
        count: 0,
        url: '/materials',
        title: 'Materials',
        photo: 'img/category-tablets.jpg',
        bgColor: '#8D8D92',
      },
      [ProductsType.Accessories]: {
        count: 0,
        url: '/accessories',
        title: 'Accessoires',
        photo: 'img/category-accessories.jpg',
        bgColor: '#D53C51',
      },
    };

    products.forEach((product) => {
      if (categoryMap[product.category]) {
        categoryMap[product.category].count += 1;
      }
    });

    return Object.values(categoryMap);
  }, [products]);

  return (
    <>
      <h1 className='hidden-title'>Product Catalog</h1>

      <section className={`section ${styles.welcome}`}>
        <div className='container'>
          <h1 className={styles.welcome__title}>Welcome to West Decor!</h1>
        </div>
        <BannerSlider />
      </section>

      <section className={`section ${styles['new-models']}`}>
        <div className='container'>
          {loading ? (
            <Loader />
          ) : error ? (
            'error'
          ) : (
            <ProductsSlider title={'Brand new models'} products={productsNewModels} />
          )}
        </div>
      </section>

      <section className={`section ${styles['categories-block']}`}>
        <div className='container'>
          <CategoriesBlock categories={allCategories} />
        </div>
      </section>

      <section className={`section ${styles['hot-prices']}`}>
        <div className='container'>
          {loading ? (
            <Loader />
          ) : error ? (
            'error'
          ) : (
            <ProductsSlider title={'Hot prices'} products={productsHotPrices} />
          )}
        </div>
      </section>
    </>
  );
}
