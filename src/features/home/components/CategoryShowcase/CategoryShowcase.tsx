import { categories } from "../../data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryShowcase.css";

function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <div className="container">
        <div className="category-showcase__grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
