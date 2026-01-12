// import React from "react";

// export default function CategoryList({ categories, selected, setSelected }) {
//   return (
//     <nav className="category-list">
//       <div className="category-list-label">Tools</div>
//       {categories.map((cat, i) => (
//         <div
//           key={cat.name}
//           className={`category-item ${selected === cat.name ? "active" : ""}`}
//           onClick={() => setSelected(cat.name)}
//         >
//           <span className="cat-num">{String(i + 1).padStart(2, "0")}</span>
//           <span className="cat-name">{cat.name}</span>
//         </div>
//       ))}
//     </nav>
//   );
// }

import React from "react";
import { ScrambledText } from "./ScrambleProvider"; // adjust path if needed

export default function CategoryList({ categories, selected, setSelected }) {
  return (
    <nav className="category-list">
      <div className="category-list-label">
        <ScrambledText>Tools</ScrambledText>
      </div>
      {categories.map((cat, i) => (
        <div
          key={cat.name}
          className={`category-item ${selected === cat.name ? "active" : ""}`}
          onClick={() => setSelected(cat.name)}
        >
          <span className="cat-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="cat-name">
            <ScrambledText>{cat.name}</ScrambledText>
          </span>
        </div>
      ))}
    </nav>
  );
}
