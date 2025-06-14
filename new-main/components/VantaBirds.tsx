// In file: app/components/VantaBirds.tsx

'use client'; // This component must run on the client

import { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

const VantaBirds = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null); // Use 'any' for Vanta's effect type
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // --- Customization for your site ---
          backgroundAlpha: 0.00, // KEY: Makes background transparent
          color1: 0xc084fc,       // Light purple from your site (purple-400)
          color2: 0xfbcfe8,       // Light pink from your site (pink-200)
          quantity: 3.00,
          birdSize: 1.20,
        })
      );
    }
    // Cleanup function: destroys the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0, // Places it behind content but in front of the page background
      }}
    />
  );
};

export default VantaBirds;
