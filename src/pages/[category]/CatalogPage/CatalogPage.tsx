import React, { useMemo } from 'react';
import styles from './CatalogPage.module.scss';
import { ProductsType } from '../../../types/ProductsType';
import { ProductsList } from '../../../components/ProductsList';
import { Loader } from '../../../components/Loader';
import { Dropdown } from '../../../components/Dropdown';
import { Pagination } from '../../../components/Pagination';
import { SearchLabelsType } from '../../../types/SearchLabelsType';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { PageInfo } from '../../../components/PageInfo';
import { useCategoriesRTK } from '../../../hooks/useCategoriesRTK';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { NotFoundPage } from '@/modules/NotFoundPage';

enum SortByValue {
  Newest = 'year',
  Alphabetically = 'name',
  Cheapest = 'price',
}
type SortableKeys = 'name' | 'price' | 'year';
type VisibleItemsType = 'Усі' | '4' | '8' | '16';

export const CatalogPage = () => {
  const { categorie: products, loading, error } = useCategoriesRTK(ProductsType.Products);
  const router = useRouter();
  const { category } = router.query;

  const searchParams = useSearchParams();
  const sortOptions = ['Найновіші', 'За назвою', 'Спочатку дешевші'] as const;
  const visibleItemsOptions: VisibleItemsType[] = ['Усі', '4', '8', '16'];
  const rawVisibleItems = searchParams?.get('perPage');
  const visibleItems = rawVisibleItems === 'All' ? 'Усі' : rawVisibleItems ?? 'Усі';
  const activePage = searchParams?.get('page') ?? 1;
  const sortParamToKey: Record<(typeof sortOptions)[number], SortableKeys> = {
    Найновіші: SortByValue.Newest,
    'За назвою': SortByValue.Alphabetically,
    'Спочатку дешевші': SortByValue.Cheapest,
  };
  const rawSort = searchParams?.get('sort') as (typeof sortOptions)[number] | null;
  const sortParams = sortParamToKey[rawSort || 'Найновіші'] ?? SortByValue.Newest;

  const filteredProducts = useMemo(() => {
    return [...products].filter((product) => product.category === category);
  }, [category, products]);

  const currentProducts = useMemo(() => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortParams) {
        case SortByValue.Alphabetically:
          return a[sortParams].localeCompare(b[sortParams]);
        case SortByValue.Cheapest:
          return a[sortParams] - b[sortParams];
        case SortByValue.Newest:
          return b[sortParams] - a[sortParams];
        default:
          return 0;
      }
    });

    if (visibleItems === 'Усі') {
      return sortedProducts;
    }

    const start = +visibleItems * (+activePage - 1);
    const end = start + +visibleItems;

    return sortedProducts.slice(start, end);
  }, [filteredProducts, visibleItems, activePage, sortParams]);

  const categoryTitles: Record<string, string> = {
    [ProductsType.Phones]: 'Декори',
    [ProductsType.Tablets]: 'Матеріали',
    [ProductsType.Accessories]: 'Аксесуари',
  };

  const categoryParam = Array.isArray(category) ? category[0] : category;
  if (!categoryParam || !(Object.values(ProductsType) as string[]).includes(categoryParam)) {
    return <NotFoundPage />;
  }

  return (
    <section className={`section ${styles.catalog}`}>
      <div className='container'>
        <Breadcrumbs />
        <PageInfo title={categoryTitles[categoryParam] ?? 'Каталог'} count={filteredProducts.length} />
        <div className={styles.catalog__dropdowns}>
          <Dropdown
            className={styles['catalog__dropdowns-sort-by']}
            title={'Сортувати за'}
            values={sortOptions}
            defaultValue={sortOptions[0]}
            searchLabel={SearchLabelsType.Sort}
          />

          <Dropdown
            className={styles['catalog__dropdowns-items-per-page']}
            title={'Товарів на сторінці'}
            values={visibleItemsOptions}
            defaultValue={visibleItemsOptions[0]}
            searchLabel={SearchLabelsType.ItemsPerPage}
          />
        </div>
        <div className={styles.catalog__cards}>
          {loading ? <Loader /> : error ? 'Сталася помилка' : <ProductsList products={currentProducts} />}
        </div>

        {!loading && visibleItems !== 'Усі' && (
          <div className={styles.catalog__pagination}>
            <Pagination
              items={filteredProducts.length}
              itemsOnPage={+visibleItems}
              activePage={+activePage}
              searchLabel={SearchLabelsType.PageCatalog}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
