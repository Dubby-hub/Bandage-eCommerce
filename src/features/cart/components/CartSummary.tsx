import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import {
  selectCartItemCount,
  selectCartTotal,
} from "../cartSelectors";

import { clearCart } from "../cartSlice";

import "./CartSummary.css";

function CartSummary() {
  const dispatch = useAppDispatch();

  const itemCount = useAppSelector(selectCartItemCount);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <aside className="cart-summary">
      <h2 className="cart-summary__title">
        Cart Summary
      </h2>

      <div className="cart-summary__row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="cart-summary__row cart-summary__total">
        <span>Total</span>

        <span>
          ${cartTotal.toFixed(2)}
        </span>
      </div>

      <button
        type="button"
        className="cart-summary__checkout"
      >
        CHECKOUT
      </button>

      {itemCount > 0 && (
        <button
          type="button"
          className="cart-summary__clear"
          onClick={() => dispatch(clearCart())}
        >
          CLEAR CART
        </button>
      )}
    </aside>
  );
}

export default CartSummary;