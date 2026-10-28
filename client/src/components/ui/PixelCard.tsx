import React, { useRef, useEffect, useState, useCallback } from 'react';

interface PixelCardProps {
  children?: React.ReactNode;
  colors?: string[];
  glowColor?: string;
  shape?: 'square' | 'circle' | 'diamond';
  origin?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'random';
  gap?: number;
  pixelSize?: number;
  speed?: number;
  revealDuration?: number;
  spotlight?: number;
  glow?: number;
  opacity?: number;
  fade?: number;
  trigger?: 'hover' | 'click' | 'always';
  radius?: number;
  clickPulse?: boolean;
  intro?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
  style?: React.CSSProperties;
}

interface Pixel {
  x: number;
  y: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  delay: number;
  speed: number;
}

const PixelCard: React.FC<PixelCardProps> = ({
  children,
  colors = ['#c8a44d', '#e5ca68', '#b8932e'],
  glowColor = '#c8a44d',
  gap = 5,
  pixelSize = 2,
  speed = 35,
  revealDuration = 600,
  spotlight = 0.5,
  glow = 0.5,
  opacity = 0.35,
  fade = 0.7,
  trigger = 'hover',
  radius = 20,
  clickPulse = false,
  intro = false,
  theme = 'dark',
  className = '',
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animRef = useRef<number>(0);
  const activeRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const initPixels = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    const pixels: Pixel[] = [];
    const step = pixelSize + gap;
    let idx = 0;
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        pixels.push({
          x,
          y,
          color: colors[idx % colors.length],
          alpha: 0,
          targetAlpha: 0,
          delay: Math.random() * revealDuration,
          speed: speed * (0.7 + Math.random() * 0.6),
        });
        idx++;
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, pixelSize, speed, revealDuration]);

  const draw = useCallback((mouseX?: number, mouseY?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixelsRef.current.forEach(px => {
      if (px.alpha <= 0 && px.targetAlpha <= 0) return;
      // Spotlight proximity fade
      let a = px.alpha;
      if (mouseX !== undefined && mouseY !== undefined && spotlight > 0) {
        const dist = Math.sqrt((px.x - mouseX) ** 2 + (px.y - mouseY) ** 2);
        const maxDist = Math.min(canvas.width, canvas.height) * spotlight;
        const spotA = Math.max(0, 1 - dist / maxDist);
        a = a * (fade + spotA * (1 - fade));
      }
      ctx.globalAlpha = a * opacity;
      ctx.fillStyle = px.color;
      ctx.fillRect(px.x, px.y, pixelSize, pixelSize);
    });
    ctx.globalAlpha = 1;
  }, [opacity, pixelSize, spotlight, fade]);

  const animate = useCallback((mouseX?: number, mouseY?: number) => {
    const now = performance.now();
    let allDone = true;
    pixelsRef.current.forEach(px => {
      if (activeRef.current) {
        px.targetAlpha = 1;
        const t = Math.max(0, (now - px.delay) / px.speed);
        px.alpha = Math.min(1, t);
        if (px.alpha < 1) allDone = false;
      } else {
        px.targetAlpha = 0;
        px.alpha = Math.max(0, px.alpha - 0.04);
        if (px.alpha > 0) allDone = false;
      }
    });
    draw(mouseX, mouseY);
    if (!allDone) {
      animRef.current = requestAnimationFrame(() => animate(mouseX, mouseY));
    }
  }, [draw]);

  const startPixels = useCallback((mx?: number, my?: number) => {
    activeRef.current = true;
    // reset delays from now
    const now = performance.now();
    pixelsRef.current.forEach(px => {
      px.delay = now + Math.random() * revealDuration;
    });
    cancelAnimationFrame(animRef.current);
    animate(mx, my);
  }, [animate, revealDuration]);

  const stopPixels = useCallback(() => {
    activeRef.current = false;
    cancelAnimationFrame(animRef.current);
    animate();
  }, [animate]);

  useEffect(() => {
    initPixels();
    if (trigger === 'always') startPixels();
    return () => cancelAnimationFrame(animRef.current);
  }, [initPixels, trigger, startPixels]);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      initPixels();
      if (trigger === 'always') startPixels();
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [initPixels, trigger, startPixels]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    draw(mx, my);
  }, [draw]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (trigger !== 'hover') return;
    const rect = containerRef.current?.getBoundingClientRect();
    const mx = rect ? e.clientX - rect.left : undefined;
    const my = rect ? e.clientY - rect.top : undefined;
    startPixels(mx, my);
  }, [trigger, startPixels]);

  const handleMouseLeave = useCallback(() => {
    if (trigger !== 'hover') return;
    stopPixels();
  }, [trigger, stopPixels]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    void e;
    if (trigger === 'click') {
      if (activeRef.current) stopPixels();
      else startPixels();
    }
    if (clickPulse) {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 400);
    }
  }, [trigger, clickPulse, startPixels, stopPixels]);

  const glowShadow = glow > 0
    ? `0 0 ${Math.round(glow * 30)}px ${Math.round(glow * 12)}px ${glowColor}${Math.round(glow * 80).toString(16).padStart(2,'0')}`
    : undefined;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: radius,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.5s ease',
        opacity: intro ? (mounted ? 1 : 0) : 1,
        transform: pulsing ? 'scale(0.96)' : 'scale(1)',
        boxShadow: glowShadow,
        background: theme === 'dark'
          ? 'rgba(17,17,17,0.7)'
          : 'rgba(255,255,255,0.7)',
        ...style,
      }}
    >
      {/* Pixel canvas layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: radius,
        }}
      />
      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default PixelCard;
