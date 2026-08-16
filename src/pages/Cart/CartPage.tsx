import { useAppSelector } from "../../app/hooks";

import CartItem from "../../features/cart/components/CartItem";
import CartSummary from "../../features/cart/components/CartSummary";

import { selectCartItems } from "../../features/cart/cartSelectors";

import "./CartPage.css";

function CartPage() {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <main className="cart-page">
      <div className="cart-page__container">
        <header className="cart-page__header">
          <h1>Your Cart</h1>

          <p>
            {cartItems.length} {cartItems.length === 1 ? "product" : "products"}{" "}
            in your cart
          </p>
        </header>

        {cartItems.length === 0 ? (
          <section className="cart-page__empty">
            <h2>Your cart is empty</h2>

            <p>You haven't added any products to your cart yet.</p>
          </section>
        ) : (
          <div className="cart-page__content">
            <section className="cart-page__items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </section>

            <CartSummary />
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;
