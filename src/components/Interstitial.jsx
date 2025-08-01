import React, { useEffect, useRef } from 'react';

// New ASCII logic provided by the user
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
function getAsciiChar(coord, context) {
  const { cols, frame } = context;
  const { x, y } = coord;
  const sign = y % 2 * 2 - 1;
  const index = (cols + y + x * sign + frame) % density.length;
  return density[index];
}

export default function Interstitial({ onComplete }) {
  const canvasRef = useRef(null);
  // Store character states for the scatter animation
  const charStates = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // --- Configuration ---
    const fontSize = 14;
    const scatterStartFrame = 60;  // 1 second at 60fps (60 frames)
    const scatterDuration = 120;   // 2 seconds to scatter (120 frames)

    // --- Resize and Initialization ---
    const init = () => {
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
          
          // Mix radial direction with pure randomness for more chaotic scatter
          const dirX = startX - centerX;
          const dirY = startY - centerY;
          const distance = Math.sqrt(dirX * dirX + dirY * dirY);
          
          // Base direction from center
          const radialX = distance > 0 ? dirX / distance : 0;
          const radialY = distance > 0 ? dirY / distance : 0;
          
          // Add lots of randomness to the direction
          const randomAngle = Math.random() * Math.PI * 2; // Random angle
          const randomX = Math.cos(randomAngle);
          const randomY = Math.sin(randomAngle);
          
          // Mix radial and random directions (70% random, 30% radial)
          const mixX = radialX * 0.3 + randomX * 0.7;
          const mixY = radialY * 0.3 + randomY * 0.7;
          
          // Random speed with more variation
          const speed = 10 + Math.random() * 20; // Random speed between 10-30
          
          charStates.current.push({
            x: startX,
            y: startY,
            vx: mixX * speed,
            vy: mixY * speed,
          });
        }
      }
    };

    window.addEventListener('resize', init);
    init();

    // --- Animation Loop ---
    let frame = 0;
    const animate = () => {
      const context = {
        frame,
        cols: Math.floor(canvas.width / fontSize),
        rows: Math.floor(canvas.height / fontSize),
      };

      const isScattering = frame >= scatterStartFrame;
      const scatterProgress = isScattering ? (frame - scatterStartFrame) / scatterDuration : 0;

      // Keep opaque white background until scatter, then fade
      if (!isScattering) {
        // Canvas stays opaque white with backgroundColor CSS
        canvas.style.opacity = '1';
      } else {
        // Fade the entire canvas (including white background) during scatter
        const fadeProgress = 1 - Math.min(scatterProgress, 1);
        canvas.style.opacity = fadeProgress;
      }
      
      // Clear just the content, not the background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = '#222'; // Dark characters for white background
      ctx.textBaseline = 'top';

      charStates.current.forEach((charState, i) => {
        const y = Math.floor(i / context.cols);
        const x = i % context.cols;

        const char = getAsciiChar({ x, y }, context);
        
        let posX = charState.x;
        let posY = charState.y;

        if (isScattering && scatterProgress < 1) {
          // Apply velocity to scatter characters with exponential progression
          const explosiveProgress = scatterProgress * scatterProgress * 100;
          posX += charState.vx * explosiveProgress;
          posY += charState.vy * explosiveProgress;
        }

        // Only draw characters that are still visible or haven't scattered yet
        if (!isScattering || 
            (posX > -fontSize && posX < canvas.width + fontSize &&
             posY > -fontSize && posY < canvas.height + fontSize)) {
          ctx.fillText(char, posX, posY);
        }
      });

      // --- Completion ---
      if (scatterProgress >= 1 && onComplete) {
        cancelAnimationFrame(animationId);
        onComplete();
        return;
      }

      frame++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationId);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="ascii-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: 'white'
      }}
    />
  );
}
