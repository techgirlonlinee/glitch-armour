import React, { useState, useEffect } from "react";
import { categories, tools } from "./data/tools";
import CategoryList from "./components/CategoryList";
import ToolCard from "./components/ToolCard";
import GlitchGrid from "./components/GlitchGrid";
import InfoTabs from "./components/InfoTabs";
import "./styles.css";

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function App() {
  const [selected, setSelected] = useState(categories[0].name);
  // For mobile: track expanded categories as an array
  const [expanded, setExpanded] = useState([]);
  const selectedCategory = categories.find(c => c.name === selected);
  const isMobile = useIsMobile();

  // Toggle expand/collapse for a category (mobile)
  function toggleCategory(catName) {
    setExpanded(prev =>
      prev.includes(catName)
        ? prev.filter(name => name !== catName)
        : [...prev, catName]
    );
  }

  return (
    <div>
      <GlitchGrid />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="title">
          {/* <img src="/G.png" alt="G" className="g" /> */}
          <img src="/glitch-armour/G.png" alt="G" class="g" />
          <h1>litch Armour</h1>
        </div>
        <div className="hero-content">
          <div className="hero-img">
            {/* <img src="/glitch-shield.png" alt="Glitchy Shield" /> */}
            <img src="/glitch-armour/glitch-shield.png" alt="Glitchy Shield" />
          </div>
          <div className="hero-text">
            <p className="intro">
              Privacy isn’t hiding—it’s resistance, autonomy, and collective power in a world that wants you exposed.<br /><br />
              Big tech and governments collect your data, often without your knowledge or consent. They sell you convenience, but you’re the product. Information asymmetry hits hardest if you’re queer, trans, a person of color, or otherwise marginalized.<br /><br />
              Protest, speak out, or just exist outside the norm—your digital trail can be weaponized: flagged at borders for supporting Palestine, arrested for showing up, or targeted by police using facial recognition at Pride. Data from period tracking apps has led to arrests for those seeking abortions.<br /><br />
              Even outside politics, your data shapes what you pay—companies use your location and browsing habits to charge you more for the same ride, flight, or product than someone else. Beyond surveillance, your browsing and likes on platforms like Instagram are weaponized to manipulate elections, revealing the insidious ways data is used.<br /><br />
              Your data lives forever—even if it feels harmless now, power shifts, and what’s safe today can be considered dangerous tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* INFO TABS SECTION */}
      <InfoTabs />

      {/* TOOLKIT SECTION */}
      <section className="toolkit">
        {isMobile ? (
          <div className="toolkit-mobile">
            <div className="category-list-mobile">
              {categories.map((cat, i) => (
                <React.Fragment key={cat.name}>
                  <div
                    className={`category-item${expanded.includes(cat.name) ? " active" : ""}`}
                    onClick={() => toggleCategory(cat.name)}
                  >
                    <span className="cat-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cat-name">{cat.name}</span>
                  </div>
                  {expanded.includes(cat.name) && (
                    <div className="category-mobile-details">
                      <div className="category-desc">{cat.description}</div>
                      <div className="tool-card-grid">
                        {tools.filter(t => t.category === cat.name).map(tool => (
                          <ToolCard key={tool.name} tool={tool} />
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <>
            <CategoryList
              categories={categories}
              selected={selected}
              setSelected={setSelected}
            />
            <div className="toolkit-main">
              <div className="category-desc">{selectedCategory.description}</div>
              <div className="tool-card-grid">
                {tools.filter(t => t.category === selected).map(tool => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
