import React, { useMemo, useState } from "react";
import FilterSidebar from "./FilterSidebar.jsx";
import ProductCard from "./ProductCard.jsx";
import styles from "../styles/ProductSection.module.css";

export default function ProductsSection({ products }) {
  const [sortOption, setSortOption] = useState("Recommended");
  const [showFilter, setShowFilter] = useState(true);

  // Sort logic (memoized for performance)
  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    switch (sortOption) {
      case "Price: High to Low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "Newest First":
        sorted.sort((a, b) => b.id - a.id); // assuming higher id = newer
        break;
      case "Popular":
        sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        sorted = [...products];
        break;
    }

    return sorted;
  }, [products, sortOption]);

  return (
    <section className={styles["products-section"]}>
      {/* --- Topbar --- */}
      <div className={styles["filter-header"]}>
        <div className={styles["left-section"]}>
          <h3 className={styles["filter-title"]}>{sortedProducts.length} Items</h3>
          <p
            className={styles["hide-filter"]}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {showFilter ? "< Hide Filter" : "> Show Filter"}
          </p>
        </div>

        <div className={styles["sort-section"]}>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className={styles["sort-dropdown"]}
          >
            <option>Recommended</option>
            <option>Newest First</option>
            <option>Popular</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* --- Main content (filters + product grid) --- */}
      <div
        className={`${styles["products-content"]} ${
          !showFilter ? styles["no-filter"] : ""
        }`}
      >
        {showFilter && <FilterSidebar />}
        <div className={styles["product-grid"]}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
