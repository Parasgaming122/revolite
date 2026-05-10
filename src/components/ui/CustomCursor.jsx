import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dotX = gsap.quickSetter(dotRef.current, 'x', 'px');
    const dotY = gsap.quickSetter(dotRef.current, 'y', 'px');
    const ringX = gsap.quickSetter(ringRef.current, 'x', 'px');
    const ringY = gsap.quickSetter(ringRef.current, 'y', 'px');

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      const { clientX: x, clientY: y } = e;
      
      dotX(x);
      dotY(y);
      
      // Delay the ring slightly for a trailing effect
      gsap.to({}, {
        duration: 0.1,
        onUpdate: () => {
          ringX(x);
          ringY(y);
        }
      });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    
    // Efficiently handle dynamic hover targets
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .interactive')) {
        onMouseEnter();
      } else {
        onMouseLeave();
      }
    };
    
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '60px' : '30px',
          height: isHovering ? '60px' : '30px',
          border: `1px solid ${isHovering ? 'var(--accent)' : 'var(--accent)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.3 : 0,
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s',
          backgroundColor: isHovering ? 'var(--accent-glow)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
