import { useAppDispatch } from "../../../app/hooks";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../cartSlice";

import type { CartItem as CartItemType } from "../types";
import "./CartItem.css";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <article className="cart-item">
      <img
       src={item.image}
        alt={item.title}
        className="cart-item__image"
      />

      <div className="cart-item__details">
        <h3 className="cart-item__title">
          {item.title}
        </h3>

        <p className="cart-item__price">
          ${item.price.toFixed(2)}
        </p>

        <div className="cart-item__quantity">
          <button
            type="button"
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
            aria-label={`Decrease quantity of ${item.title}`}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
            aria-label={`Increase quantity of ${item.title}`}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="cart-item__remove"
          onClick={() =>
            dispatch(removeFromCart(item.id))
          }
        >
          Remove
        </button>
      </div>

      <p className="cart-item__subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </article>
  );
}

export default CartItem;