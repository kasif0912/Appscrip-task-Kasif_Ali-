import React, { useState } from "react";
import style from "../styles/FilterSidebar.module.css";

export default function FilterSidebar() {
  return (
    <aside className={style["filter-sidebar"]}>
      {/* Filter options */}
      <div className={style["filter-options"]}>
        <div className={style["filter-group"]}>
          <label>
            <input type="checkbox" /> CUSTOMIZABLE
          </label>
        </div>

        {[
          "IDEAL FOR",
          "OCCASION",
          "WORK",
          "FABRIC",
          "SEGMENT",
          "SUITABLE FOR",
          "RAW MATERIALS",
          "PATTERN",
        ].map((filter) => (
          <div key={filter} className={style["filter-group"]}>
            <h4>{filter}</h4>
            <select>
              <option>All</option>
            </select>
          </div>
        ))}
      </div>
    </aside>
  );
}
