import React, {useEffect, useRef} from "react";

// Helper functions (no changes here)
function map(value, fromMin, fromMax, toMin, toMax) {
  return toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);
}

function fract(x) {
  return x - Math.floor(x);
}

const density = ";:+=-GLITCH,._▀▄▚▀3210?!abc;:+=-,.ARMOUR_▀▄▚▐─═0123.+? ";

function getAsciiChar(coord, context) {
  const {cols, elapsedTime, shimmerSpeed} = context;
  const {x, y} = coord;

  const sign = (y % 2) * 2 - 1;
  const timeFactor = Math.floor(elapsedTime * shimmerSpeed);
  const index = (cols + y + x * sign + timeFactor) % density.length;

  return density[index];
}

export default function Interstitial({onComplete}) {
  const canvasRef = useRef(null);
  const charStates = useRef([]);
  const animationFrameId = useRef(null);
  const hasFrozen = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const fontSize = 16;

    // --- CONFIGURATION ---
    const movementStartTime = 3000;
    const fadeDuration = 500;
    const shimmerSpeed = 0.02;
    const scatterSpeed = 6.0;

    // ==========================================================
    // NEW KNOBS FOR THE INITIAL SCATTER FEEL
    // ==========================================================
    const jiggleDuration = 250; // How long the initial chaos lasts (in ms)
    const jiggleIntensity = 4; // How "wild" the initial jiggle is (in pixels)

    const init = () => {
      /* ... init function is unchanged ... */
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / fontSize);
      const rows = Math.floor(canvas.height / fontSize);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      charStates.current = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const startX = x * fontSize;
          const startY = y * fontSize;
          const dirX = startX - centerX;
          const dirY = startY - centerY;
          const radialDist = Math.sqrt(dirX * dirX + dirY * dirY);
          const radialX = radialDist > 0 ? dirX / radialDist : 0;
          const radialY = radialDist > 0 ? dirY / radialDist : 0;
          const randomAngle = Math.random() * Math.PI * 2;
          const randomX = Math.cos(randomAngle);
          const randomY = Math.sin(randomAngle);
          const mixedX = radialX * 0.3 + randomX * 0.7;
          const mixedY = radialY * 0.3 + randomY * 0.7;
          const dirLength = Math.sqrt(mixedX * mixedX + mixedY * mixedY);
          let normalizedX = 0,
            normalizedY = 0;
          if (dirLength > 0) {
            normalizedX = mixedX / dirLength;
            normalizedY = mixedY / dirLength;
          }
          const randomSpeedFactor = 0.8 + Math.random() * 0.7;

          charStates.current.push({
            x: startX,
            y: startY,
            vx: normalizedX,
            vy: normalizedY,
            randomSpeedFactor: randomSpeedFactor,
            frozenChar: null,
          });
        }
      }
      hasFrozen.current = false;
    };

    window.addEventListener("resize", init);
    init();

    let startTime = null;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
        lastTimestamp = timestamp;
      }

      const rawDeltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      const deltaTime = Math.min(rawDeltaTime, 32);

      const elapsedTime = timestamp - startTime;
      const hasMovementStarted = elapsedTime >= movementStartTime;

      const context = {
        elapsedTime,
        cols: Math.floor(canvas.width / fontSize),
        rows: Math.floor(canvas.height / fontSize),
        shimmerSpeed: shimmerSpeed,
      };

      if (hasMovementStarted && !hasFrozen.current) {
        charStates.current.forEach((charState, i) => {
          const gridY = Math.floor(i / context.cols);
          const gridX = i % context.cols;
          charState.frozenChar = getAsciiChar({x: gridX, y: gridY}, context);
        });
        hasFrozen.current = true;
      }

      if (hasMovementStarted) {
        if (canvas.style.pointerEvents !== "none") {
          canvas.style.pointerEvents = "none";
        }
      }

      let backgroundAlpha = 1.0;
      if (hasMovementStarted) {
        const timeIntoMovement = elapsedTime - movementStartTime;
        const fadeProgress = Math.min(timeIntoMovement / fadeDuration, 1.0);
        backgroundAlpha = 1 - fadeProgress;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (backgroundAlpha > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${backgroundAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.textBaseline = "top";
      let charactersOnScreen = 0;

      charStates.current.forEach((charState, i) => {
        let char = hasFrozen.current
          ? charState.frozenChar
          : getAsciiChar(
              {
                x: Math.floor(i % context.cols),
                y: Math.floor(i / context.cols),
              },
              context
            );

        let displayX = charState.x;
        let displayY = charState.y;

        if (hasMovementStarted) {
          // --- CONTINUOUS MOVEMENT (NO PAUSE) ---
          const finalCharSpeed = scatterSpeed * charState.randomSpeedFactor;
          charState.x += charState.vx * finalCharSpeed * (deltaTime / 16);
          charState.y += charState.vy * finalCharSpeed * (deltaTime / 16);

          displayX = charState.x;
          displayY = charState.y;

          // --- FADING JIGGLE LOGIC ---
          const timeIntoMovement = elapsedTime - movementStartTime;
          if (timeIntoMovement < jiggleDuration) {
            // Jiggle factor goes from 1 down to 0
            const jiggleFactor = 1 - timeIntoMovement / jiggleDuration;
            displayX += (Math.random() - 0.5) * jiggleIntensity * jiggleFactor;
            displayY += (Math.random() - 0.5) * jiggleIntensity * jiggleFactor;
          }
        }

        if (
          displayX > -fontSize &&
          displayX < canvas.width + fontSize &&
          displayY > -fontSize &&
          displayY < canvas.height + fontSize
        ) {
          charactersOnScreen++;
          const unicodeBlocks = "▀▄▚▐─═";
          const glitchArmourLetters = "GLITCHARMOUR";
          if (unicodeBlocks.includes(char)) {
            ctx.fillStyle = "#00ff00";
            ctx.font = `${fontSize}px monospace`;
          } else if (glitchArmourLetters.includes(char)) {
            ctx.fillStyle = "#222";
            ctx.font = `bold ${fontSize}px monospace`;
          } else {
            ctx.fillStyle = "#222";
            ctx.font = `${fontSize}px monospace`;
          }
          ctx.fillText(char, displayX, displayY);
        }
      });

      if (hasMovementStarted && charactersOnScreen === 0) {
        if (onComplete) onComplete();
        return;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", init);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className='ascii-canvas'
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        opacity: 1,
        backgroundColor: "transparent",
      }}
    />
  );
}
