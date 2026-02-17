import { useCallback, useMemo } from 'react';
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
import categoryMaterials from '@/assets/img/categories/category-tablets.jpg';
import categoryDecors from '@/assets/img/categories/category-phones.jpg';
import categoryAccessoires from '@/assets/img/categories/category-accessories.jpg';

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
        title: 'Декори',
        photo: categoryDecors.src,
        bgColor: '#6D6474',
      },
      [ProductsType.Tablets]: {
        count: 0,
        url: '/materials',
        title: 'Матеріали',
        photo: categoryMaterials.src,
        bgColor: '#8D8D92',
      },
      [ProductsType.Accessories]: {
        count: 0,
        url: '/accessories',
        title: 'Аксесуари',
        photo: categoryAccessoires.src,
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
      <h1 className='hidden-title'>Каталог товарів</h1>

      <section className={`section ${styles.welcome}`}>
        <div className='container'>
          <h1 className={styles.welcome__title}>Ласкаво просимо до West Decor!</h1>
        </div>
        <BannerSlider />
      </section>

      <section className={`section ${styles['new-models']}`}>
        <div className='container'>
          {loading ? (
            <Loader />
          ) : error ? (
            'Сталася помилка'
          ) : (
            <ProductsSlider title={'Новинки'} products={productsNewModels} />
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
            'Сталася помилка'
          ) : (
            <ProductsSlider title={'Гарячі ціни'} products={productsHotPrices} />
          )}
        </div>
      </section>
    </>
  );
}
