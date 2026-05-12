import React, { useEffect, useRef } from 'react';

const isMobile = typeof window !== 'undefined' && (
  window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
);

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  // Disable particles entirely on mobile for performance
  if (isMobile) return null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Read accent color from CSS variable instead of ThemeContext
        const style = getComputedStyle(document.documentElement);
        const accent = style.getPropertyValue('--accent').trim();
        // Parse hex to rgb for alpha support
        const r = parseInt(accent.slice(1, 3), 16);
        const g = parseInt(accent.slice(3, 5), 16);
        const b = parseInt(accent.slice(5, 7), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.life})`;
        ctx.fill();
      }
    }

    const init = () => {
      const count = Math.min(Math.floor(window.innerWidth / 20), 40);
      particles = Array.from({ length: count }, () => new Particle());
    };

    // Cache the computed color to avoid per-frame reflow
    let cachedColor = '';
    const updateCachedColor = () => {
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue('--accent').trim();
      const r = parseInt(accent.slice(1, 3), 16);
      const g = parseInt(accent.slice(3, 5), 16);
      const b = parseInt(accent.slice(5, 7), 16);
      cachedColor = `${r}, ${g}, ${b}`;
    };

    // Override draw to use cached color
    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${cachedColor}, ${this.life})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Observe theme changes via MutationObserver instead of React context
    const observer = new MutationObserver(() => updateCachedColor());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    window.addEventListener('resize', resize, { passive: true });
    resize();
    updateCachedColor();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.4
      }}
    />
  );
};

export default ParticleCanvas;
