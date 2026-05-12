import React, { useEffect, useRef } from 'react';

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // On touch devices, render nothing and run no effects
  if (isTouchDevice) return null;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let visible = false;

    const onMouseMove = (e) => {
      if (!visible) {
        dot.style.opacity = '1';
        ring.style.opacity = '0.3';
        visible = true;
      }
      const { clientX: x, clientY: y } = e;
      dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      ring.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };

    const onMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], .interactive');
      if (isInteractive) {
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.backgroundColor = 'var(--accent-glow)';
      } else {
        ring.style.width = '30px';
        ring.style.height = '30px';
        ring.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

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
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform'
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          border: '1px solid var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s',
          backgroundColor: 'transparent',
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default CustomCursor;
