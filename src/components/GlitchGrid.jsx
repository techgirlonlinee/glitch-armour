import React, { useEffect } from "react";

const SQUARE_SIZE = 10;
const NUM_SQUARES = Math.floor(Math.random() * 11) + 10;
// const NUM_SQUARES = Math.floor(Math.random() * 4) + 8;

function getGrid() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return {
    cols: Math.floor(w / SQUARE_SIZE),
    rows: Math.floor(h / SQUARE_SIZE)
  };
}

function randomPosition(cols, rows) {
  return {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

export default function GlitchGrid() {
  useEffect(() => {
    const squares = [];
    const positions = [];

    const { cols, rows } = getGrid();
    for (let i = 0; i < NUM_SQUARES; i++) {
      const div = document.createElement("div");
      div.className = "glitch-square";
      document.body.appendChild(div);
      squares.push(div);
      positions.push(randomPosition(cols, rows));
    }

    function renderSquares() {
      squares.forEach((div, i) => {
        const { x, y } = positions[i];
        div.style.left = `${x * SQUARE_SIZE}px`;
        div.style.top = `${y * SQUARE_SIZE}px`;
      });
    }

    function glitchOnScroll() {
      const { cols, rows } = getGrid();
      squares.forEach((div, i) => {
        if (Math.random() < 0.1) {
          positions[i] = randomPosition(cols, rows);
        }
      });
      renderSquares();
    }

    function onResize() {
      const { cols, rows } = getGrid();
      positions.forEach((pos, i) => {
        positions[i] = {
          x: Math.min(pos.x, cols - 1),
          y: Math.min(pos.y, rows - 1)
        };
      });
      renderSquares();
    }

    renderSquares();
    window.addEventListener("scroll", glitchOnScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Cleanup on unmount
    return () => {
      squares.forEach(div => div.remove());
      window.removeEventListener("scroll", glitchOnScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null; // This component doesn't render anything itself
}
