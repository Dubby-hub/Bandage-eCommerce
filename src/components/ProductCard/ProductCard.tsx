import type { Product } from "../../types/product";
import Icon from "../Icon/Icon";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.originalPrice !== undefined &&
    product.originalPrice > product.price;

  return (
    <article
      className={`product-card ${
        product.isOutOfStock ? "product-card--out-of-stock" : ""
      }`}
    >
      <div className="product-card__image-wrapper">
      <img
  src={product.image}
  alt={product.title}
  className="product-card__image product-card__image--default"
/>

{product.hoverImage && (
  <img
    src={product.hoverImage}
    alt=""
    aria-hidden="true"
    className="product-card__image product-card__image--hover"
  />
)}
        {hasDiscount && product.discount !== undefined && (
          <span className="product-card__discount">
            -{product.discount}%
          </span>
        )}

        {product.isOutOfStock && (
          <span className="product-card__stock">
            Out of stock
          </span>
        )}

        <div className="product-card__actions">
          <button
            type="button"
            aria-label="Compare product"
          >
            <Icon name="share" size={18} />
          </button>

          <button
            type="button"
            aria-label="Add to wishlist"
          >
            <Icon name="heart" size={18} />
          </button>
        </div>
      </div>

      <div className="product-card__content">
        <p className="product-card__category">
          {product.category}
        </p>

        <h3 className="product-card__title">
          {product.title}
        </h3>

        <div className="product-card__price">
          {hasDiscount && (
            <span className="product-card__original-price">
              € {product.originalPrice?.toFixed(2)}
            </span>
          )}

          <span className="product-card__current-price">
            € {product.price.toFixed(2)}
          </span>
        </div>

        <div className="product-card__rating">
          <div className="product-card__stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name="star"
                size={16}
              />
            ))}
          </div>

          <span>
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>

      <button
        type="button"
        className="product-card__basket"
        disabled={product.isOutOfStock}
      >
        ADD TO BASKET
      </button>
    </article>
  );
}

export default ProductCard;