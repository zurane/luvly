import data from "../../data.js";
import ProductCategoryCard from "../molecules/productCategoryCard.jsx";

export default function CategoryCards() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {data &&
        data.map((category) => (
          <a href={`/category/${category.id}`} key={category.id}>
            <ProductCategoryCard
              categoryImage={category.imageUrl}
              categoryName={category.name}
            />
          </a>
        ))}
    </article>
  );
}
