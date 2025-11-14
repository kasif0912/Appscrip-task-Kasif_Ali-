import React from "react";
import style from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={style.productCard}>
      <div className={style.productImage}>
        <img src={product.image} alt={product.title} />
        
        {product.id % 2 === 0 && (
          <span className={`${style.badge} ${style.new}`}>NEW PRODUCT</span>
        )}
        {product.id % 3 === 0 && (
          <span className={`${style.badge} ${style.out}`}>OUT OF STOCK</span>
        )}
      </div>

      <h4 className={style.productName}>{product.title}</h4>
    </div>
  );
}
