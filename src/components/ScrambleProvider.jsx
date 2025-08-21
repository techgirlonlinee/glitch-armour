// src/components/ScrambleProvider.jsx
import { createContext, useContext, useEffect, useRef } from 'react';
import baffle from 'baffle';
import { useInView } from 'react-intersection-observer';

const ScrambleContext = createContext();

export function useScramble() {
  return useContext(ScrambleContext);
}

export function ScrambleProvider({ children }) {
  // Optionally, could add config here
  return (
    <ScrambleContext.Provider value={{}}>
      {children}
    </ScrambleContext.Provider>
  );
}

// ScrambledText component
export function ScrambledText({ children, duration = 800, ...props }) {
  const ref = useRef();
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Merge refs
  function setRefs(node) {
    ref.current = node;
    inViewRef(node);
  }

  useEffect(() => {
    if (ref.current && inView) {
      const b = baffle(ref.current, {
        characters: '█▓▒░<>/\\|@#`–=',
        speed: 40,
      });
      b.start();
      b.reveal(duration);
      return () => b && b.stop();
    }
  }, [inView, duration]);

  return (
    <span ref={setRefs} {...props}>
      {children}
    </span>
  );
}
