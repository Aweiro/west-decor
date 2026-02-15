import React, { useEffect, useMemo, useState } from 'react';
import styles from './CartPage.module.scss';
import { BackLink } from '../../components/BackLink';
import { ButtonType } from '../../types/ButtonType';
import { Button } from '../../components/Button';
import { ProductsType } from '../../types/ProductsType';
import { Product } from '../../types/ProductType';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';
import { useCategoriesRTK } from '../../hooks/useCategoriesRTK';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  changeCartQuantity,
  clearCart,
  selectAllCartQuantity,
  toggleCart,
} from '@/features/cart/cartSlice';

export type CartItem = Product & {
  quantity: number;
  sum: number;
};

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { items: cartIds } = useAppSelector((state) => state.cart);
  const allCartQuantity = useAppSelector(selectAllCartQuantity);
  const dispatch = useAppDispatch();

  const cartQuantity = (id: Product['id']) => cartIds.find((unit) => unit.id === id)?.quantity ?? 0;

  const { categorie: products, loading, error } = useCategoriesRTK(ProductsType.Products);

  const [showModalCheckout, setShowModalCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', comment: '' });
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const currentProducts = useMemo(
    () => products.filter((el) => cartIds.some((item) => item.id === el.itemId)),
    [cartIds, products],
  );

  if (!mounted) return null;

  const CartItem = ({ product }: { product: CartItem }) => {
    return (
      <div className={styles.cart__item}>
        <button
          className={`icon icon--close ${styles['cart__item-remove']}`}
          onClick={() => dispatch(toggleCart(product.itemId))}
        />
        <div className={styles['cart__item-photo']}>
          <img src={product.image} alt={product.name} className={styles['cart__item-img']} />
        </div>
        <p className={`body-text ${styles['cart__item-title']}`}>{product.name}</p>
        <div className={styles['cart__item-counter']}>
          <Button
            isRatio={true}
            icon={ButtonType.Minus}
            onClick={() => dispatch(changeCartQuantity({ id: product.itemId, delta: -1 }))}
          />
          {product.quantity}
          <Button
            isRatio={true}
            icon={ButtonType.Plus}
            onClick={() => dispatch(changeCartQuantity({ id: product.itemId, delta: 1 }))}
          />
        </div>
        <h3>${product.sum}</h3>
      </div>
    );
  };

  const visibleProducts = currentProducts.map((el) => ({
    ...el,
    sum: cartQuantity(el.itemId) * el.price,
    quantity: cartQuantity(el.itemId),
  }));

  const allPrice = visibleProducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.sum,
    0,
  );

  const handleCheckoutSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');

    const name = checkoutForm.name.trim();
    const phone = checkoutForm.phone.trim();
    const comment = checkoutForm.comment.trim();

    if (!name || !phone) {
      setSubmitError("Ім'я та номер телефону обов'язкові.");
      return;
    }

    if (!visibleProducts.length) {
      setSubmitError('Кошик порожній.');
      return;
    }

    const items = visibleProducts.map((product) => ({
      itemId: product.itemId,
      name: product.name,
      image: product.image,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      sum: product.sum,
    }));

    setSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          comment: comment || null,
          items,
          total: allPrice,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Не вдалося оформити замовлення.');
      }

      dispatch(clearCart());
      setCheckoutForm({ name: '', phone: '', comment: '' });
      setShowModalCheckout(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Сталася помилка.';
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='container'>
      <div className={styles.cart__info}>
        <BackLink />
        <h1>Cart</h1>
      </div>

      {cartIds.length === 0 ? (
        <section className='section'>
          <img className='not-found__img' src='img/cart-is-empty.png' alt='empty-cart' />
        </section>
      ) : loading ? (
        <Loader />
      ) : error ? (
        'error'
      ) : (
        <>
          <section className={`section ${styles.cart__block}`}>
            <div className={styles.cart__wrapper}>
              {visibleProducts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className={styles.cart__total}>
              <h2>${allPrice}</h2>
              <p className={`body-text ${styles['cart__total-count']}`}>
                Total for {allCartQuantity} items
              </p>
              <hr className={styles['cart__total-line']} />
              <Button
                className={`button-text ${styles['cart__total-checkout']}`}
                onClick={() => setShowModalCheckout(true)}
              >
                Checkout
              </Button>
            </div>
          </section>
          {showModalCheckout && (
            <Modal className={styles['cart-modal']} onCloseModal={setShowModalCheckout}>
              <h3>Оформлення замовлення</h3>
              <form className={styles['cart-modal__form']} onSubmit={handleCheckoutSubmit}>
                <label className={styles['cart-modal__field']}>
                  Ім'я
                  <input
                    className={styles['cart-modal__input']}
                    type='text'
                    value={checkoutForm.name}
                    onChange={(event) =>
                      setCheckoutForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    required
                  />
                </label>
                <label className={styles['cart-modal__field']}>
                  Номер телефону
                  <input
                    className={styles['cart-modal__input']}
                    type='tel'
                    value={checkoutForm.phone}
                    onChange={(event) =>
                      setCheckoutForm((prev) => ({ ...prev, phone: event.target.value }))
                    }
                    required
                  />
                </label>
                <label className={styles['cart-modal__field']}>
                  Коментар (необов'язково)
                  <textarea
                    className={styles['cart-modal__textarea']}
                    value={checkoutForm.comment}
                    onChange={(event) =>
                      setCheckoutForm((prev) => ({ ...prev, comment: event.target.value }))
                    }
                  />
                </label>
                {submitError && (
                  <p className={`small-text ${styles['cart-modal__error']}`}>{submitError}</p>
                )}
                <div className={styles['cart-modal__buttons']}>
                  <Button
                    className={styles['cart-modal__button']}
                    isSelected
                    onClick={() => setShowModalCheckout(false)}
                    type='button'
                  >
                    Скасувати
                  </Button>
                  <Button className={styles['cart-modal__button']} type='submit'>
                    {submitting ? 'Надсилання...' : 'Підтвердити'}
                  </Button>
                </div>
              </form>
            </Modal>
          )}
        </>
      )}
    </div>
  );
}
