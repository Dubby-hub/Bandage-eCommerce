import ProductGrid from "../../../../components/ProductGrid/ProductGrid";
import { products } from "../../data/products";
import "./ProductSection.css";

function ProductSection() {
  return (
    <section className="product-section">
      <div className="container">

        <div className="product-section__header">
          <p className="product-section__eyebrow">
            Featured Products
          </p>

          <h2 className="product-section__title">
            BESTSELLER PRODUCTS
          </h2>

          <p className="product-section__description">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics:
            Newtonian mechanics.
          </p>
        </div>

        <ProductGrid products={products} />

        <div className="product-section__footer">
          <button
            type="button"
            className="product-section__load-more"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProductSection;