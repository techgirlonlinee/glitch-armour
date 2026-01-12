// import { useState, useEffect } from "react";
// import "./VisitCounter.css";

// const STARTING_COUNT = 5000; // your baseline

// export default function VisitCounter() {
// 	const [count, setCount] = useState(null);

// 	useEffect(() => {
// 		const fetchCount = async () => {
// 			try {
// 				const res = await fetch(
// 					"https://glitch-armour.goatcounter.com/counter//TOTAL.json"
// 				);
// 				const data = await res.json();
// 				const realCount = data.count_unique || data.count || 0;
// 				setCount(realCount + STARTING_COUNT);
// 			} catch (err) {
// 				console.log("GoatCounter fetch failed:", err);
// 				setCount(STARTING_COUNT);
// 			}
// 		};
// 		fetchCount();
// 	}, []);

// 	return (
// 		<span className="visit-counter">
// 			{count !== null ? `${count.toLocaleString()} visitors` : "..."}
// 		</span>
// 	);
// }

import { useState, useEffect } from "react";
import "./VisitCounter.css";

export default function VisitCounter() {
	const [count, setCount] = useState("...");

	useEffect(() => {
		// Fetch the SVG as text and parse the number out
		fetch("https://hits.sh/glitcharmour.org.svg?extraCount=5000")
			.then((res) => res.text())
			.then((svg) => {
				// The count is in the SVG text content
				const match = svg.match(/>(\d[\d,]*)<\/text>/);
				if (match) setCount(match[1]);
			})
			.catch(() => setCount("5,000+"));
	}, []);

	return <span className="visit-counter">{count} visitors</span>;
}
