import React, { useState, useEffect, useCallback } from "react";
import { categories, tools } from "./data/tools";
import ToolCard from "./components/ToolCard";
import GlitchGrid from "./components/GlitchGrid";
import InfoTabs from "./components/InfoTabs";
import Interstitial from "./components/Interstitial";
import { ScrambledText } from "./components/ScrambleProvider";
import "./styles.css";

export default function App() {
  const [showInterstitial, setShowInterstitial] = useState(true);
  const [expanded, setExpanded] = useState([]);

  const handleInterstitialComplete = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  function toggleCategory(catName) {
    setExpanded((prev) =>
      prev.includes(catName)
        ? prev.filter((name) => name !== catName)
        : [...prev, catName]
    );
  }

  return (
    <div>
      {showInterstitial && (
        <Interstitial onComplete={handleInterstitialComplete} />
      )}
      <GlitchGrid />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-name">
        <div className="title">
          <div className="glitch">
            <img src="/G.png" alt="G" className="g" />
            <h1 className="g-letter">litch</h1>
          </div>
          <div className="armour">
           <img src="/a.png" alt="G" className="a" />
           <h1 className="a-letter">rmour</h1>
          </div>
        </div>
        <div className="hero-img">
            <img src="/glitch-shield.png" alt="Glitchy Shield" />
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h2>
              {/* <ScrambledText> */}
                Privacy isn't hiding—it's resistance, autonomy, and collective
                power in a world that wants you exposed.
              {/* </ScrambledText> */}
            </h2>
            <div className="intro">
              <p>
                Big tech and governments collect your data, often without your
                knowledge or consent. They sell you convenience, but you're the
                product. Information asymmetry hits hardest if you're queer,
                trans, a person of color, or otherwise marginalized.
              </p>

              <p>
                Protest, speak out, or just exist outside the norm—your digital
                trail can be weaponized: flagged at borders for supporting
                Palestine, arrested for showing up, or targeted by police using
                facial recognition at Pride. Data from period tracking apps has
                led to arrests for those seeking abortions.
              </p>

              <p>
                Even outside politics, your data shapes what you pay—companies use
                your location and browsing habits to charge you more for the same
                ride, flight, or product than someone else. Beyond surveillance,
                your browsing and likes on platforms like Instagram are weaponized
                to manipulate elections, revealing the insidious ways data is
                used.
              </p>

              <p>
                Your data lives forever—even if it feels harmless now, power
                shifts, and what's safe today can be considered dangerous
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO TABS SECTION */}
      <InfoTabs />

      {/* TOOLKIT SECTION */}
      <section className="toolkit">
        <h2 className="toolkit-title">Toolkit</h2>
        <div className="category-list">
          {categories.map((cat, i) => (
            <div key={cat.name} className="category-wrapper">
              <div
                className={`category-item${
                  expanded.includes(cat.name) ? " active" : ""
                }`}
                onClick={() => toggleCategory(cat.name)}
              >
                <span className="cat-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cat-name">
                  <ScrambledText>{cat.name}</ScrambledText>
                </span>
              </div>
              {expanded.includes(cat.name) && (
                <div className="category-details">
                  <div className="category-desc">
                    {cat.description}
                  </div>
                  <div className="tool-card-grid">
                    {tools
                      .filter((t) => t.category === cat.name)
                      .map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
