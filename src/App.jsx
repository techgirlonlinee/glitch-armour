import React, { useState, useEffect, useCallback } from "react";
import { categories, tools } from "./data/tools";
import ToolCard from "./components/ToolCard";
import GlitchGrid from "./components/GlitchGrid";
import InfoTabs from "./components/InfoTabs";
import Interstitial from "./components/Interstitial";
import { ScrambledText } from "./components/ScrambleProvider";
import VisitCounter from "./components/VisitCounter";
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
			{/* {showInterstitial && (
				<VisitCounter onComplete={handleInterstitialComplete} />
			)} */}
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
					<div className="hero-svg">
						<img src="/title.svg" alt="Glitch Armour" />
					</div>
					<div className="hero-img">
						<img src="/glitch-shield.png" alt="Glitchy Shield" />
					</div>
				</div>
				<div className="hero-content">
					<div className="hero-text">
						<h2>
							{/* <ScrambledText> */}
							In a world that wants you as exposed as possible, privacy isn't
							hiding, it's resistance, autonomy, and collective power.
							{/* </ScrambledText> */}
						</h2>
						<div className="intro">
							<p>
								Big tech & governments scoop up our data, often without
								meaningful consent. They sell us convenience as a 'free'
								service, but the true cost is our privacy. And the consequences
								of this system disproportionately impact queer, trans, Black,
								Brown, and other marginalized people, who pay the highest price.
							</p>
							<p>
								We're already seeing our digital trails being used against us.
								To identify protesters with facial recognition, to profile
								people at Pride, to flag travelers for their social media posts
								about Palestine, and even to obtain subpoenas for the data from
								cycle and period-tracking apps.
							</p>

							<p>
								Big tech is also using that same data to pick our pockets. A
								single fare, flight or gadget on our wishlists can be priced
								higher for one person than another. The calculation happens
								quietly, based on factors like your postal code, the device you
								use, and how long you've been searching.
							</p>
							<p>
								But the real grab happens as you scroll. Any swipe and
								double-tap on Instagram or TikTok can be scraped, sorted and
								sold to political operatives who turn your feed into a targeted
								ad campaign. In the end, the true currency isn’t your money—it’s
								your mind.
							</p>
							<p>
								The system was built on "free and easy." Reclaiming privacy
								requires small, deliberate choices: pick one tool, get used to
								it, then pick another.
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
									<div className="category-desc">{cat.description}</div>
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

			<div className="visit-count">
				<p className="visit-count-line">
					<VisitCounter /> since launch. Last updated 12/01/2026
				</p>
			</div>
		</div>
	);
}
