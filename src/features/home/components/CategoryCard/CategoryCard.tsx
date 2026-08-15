import type { Category } from "../../data/categories";
import "./CategoryCard.css";

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className={`category-card category-card--${category.size}`}>
      <img
        src={category.image}
        alt={category.title}
        className="category-card__image"
      />

      <div className="category-card__overlay">
        <span className="category-card__count">5 Items</span>

        <h2 className="category-card__title">{category.title}</h2>

        <a href="/shop" className="category-card__link">
          Read More
        </a>
      </div>
    </article>
  );
}

export default CategoryCard;
