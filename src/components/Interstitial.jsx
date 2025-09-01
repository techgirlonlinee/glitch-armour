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
    const movementStartTime = 2000;
    const fadeDuration = 500;
    const shimmerSpeed = 0.02;
    const scatterSpeed = 6.0;


    const init = () => {
      /* ... init function is unchanged ... */
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      const cols = Math.ceil(canvas.width / fontSize);
      const rows = Math.ceil(canvas.height / fontSize);
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
        cols: Math.ceil(canvas.width / fontSize),
        rows: Math.ceil(canvas.height / fontSize),
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

      const nextCharStates = [];
      const greenChars = [];
      const boldChars = [];
      const regularChars = [];

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

        if (hasMovementStarted) {
          const finalCharSpeed = scatterSpeed * charState.randomSpeedFactor;
          charState.x += charState.vx * finalCharSpeed * (deltaTime / 16);
          charState.y += charState.vy * finalCharSpeed * (deltaTime / 16);
        }

        const {x, y} = charState;

        if (x > -fontSize && x < canvas.width && y > -fontSize && y < canvas.height) {
          const unicodeBlocks = "▀▄▚▐─═";
          const glitchArmourLetters = "GLITCHARMOUR";

          if (unicodeBlocks.includes(char)) {
            greenChars.push({char, x, y});
          } else if (glitchArmourLetters.includes(char)) {
            boldChars.push({char, x, y});
          } else {
            regularChars.push({char, x, y});
          }
          nextCharStates.push(charState);
        }
      });

      // Draw green chars
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;
      greenChars.forEach(({char, x, y}) => ctx.fillText(char, x, y));

      // Draw bold chars
      ctx.fillStyle = "#222";
      ctx.font = `bold ${fontSize}px monospace`;
      boldChars.forEach(({char, x, y}) => ctx.fillText(char, x, y));

      // Draw regular chars
      ctx.fillStyle = "#222";
      ctx.font = `${fontSize}px monospace`;
      regularChars.forEach(({char, x, y}) => ctx.fillText(char, x, y));

      charStates.current = nextCharStates;

      if (hasMovementStarted && charStates.current.length === 0) {
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
