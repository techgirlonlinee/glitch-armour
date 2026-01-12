import { useState, useEffect } from "react";
import "./VisitCounter.css";

const STARTING_COUNT = 5000; // your baseline

export default function VisitCounter() {
	const [count, setCount] = useState(null);

	useEffect(() => {
		const fetchCount = async () => {
			try {
				const res = await fetch(
					"https://glitch-armour.goatcounter.com/counter//TOTAL.json"
				);
				const data = await res.json();
				const realCount = data.count_unique || data.count || 0;
				setCount(realCount + STARTING_COUNT);
			} catch (err) {
				console.log("GoatCounter fetch failed:", err);
				setCount(STARTING_COUNT);
			}
		};
		fetchCount();
	}, []);

	return (
		<span className="visit-counter">
			{count !== null ? `${count.toLocaleString()} visitors` : "..."}
		</span>
	);
}
