import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedButton = ({ text }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Hover animation for the button
    const button = buttonRef.current;
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.1,
        backgroundColor: '#ff6347',
        duration: 0.3,
      });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: '#333',
        duration: 0.3,
      });
    });
  }, []);

  return (
    <button ref={buttonRef} className="animated-button">
      {text}
    </button>
  );
};

export default AnimatedButton;