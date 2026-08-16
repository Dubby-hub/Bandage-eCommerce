import ProductGrid from "../../../../components/ProductGrid/ProductGrid";
import { useGetProductsQuery } from "../../../products/api/productsApi";

import "./ProductSection.css";

function ProductSection() {
  const {
    data: products = [],
    isLoading,
    isError,
    refetch,
  } = useGetProductsQuery(10);

  if (isLoading) {
    return (
      <section className="product-section">
        <div className="container">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="product-section">
        <div className="container">
          <div className="product-section__message">
            <h2>Unable to load products</h2>

            <p>
              Something went wrong while loading the products. Please try again.
            </p>

            <button
              type="button"
              className="product-section__retry"
              onClick={() => refetch()}
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="product-section">
        <div className="container">
          <div className="product-section__message">
            <h2>No products available</h2>

            <p>We couldn't find any products at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-section">
      <div className="container">
        <div className="product-section__header">
          <p className="product-section__eyebrow">Featured Products</p>

          <h2 className="product-section__title">BESTSELLER PRODUCTS</h2>

          <p className="product-section__description">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        <ProductGrid products={products} />

        <div className="product-section__footer">
          <button type="button" className="product-section__load-more">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
