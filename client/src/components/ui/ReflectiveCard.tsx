import React, { useRef, useEffect, useState, useCallback } from 'react';

interface ReflectiveCardProps {
  name?: string;
  role?: string;
  children?: React.ReactNode;
  tint?: string;
  metalness?: number;
  roughness?: number;
  blurStrength?: number;
  shine?: number;
  glare?: number;
  grayscale?: number;
  warp?: number;
  warpScale?: number;
  bevel?: number;
  tiltStrength?: number;
  radius?: number;
  enableTilt?: boolean;
  intro?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  name,
  role,
  children,
  tint = '#ffffff',
  metalness = 0.6,
  roughness = 0.4,
  blurStrength = 8,
  shine = 0.7,
  glare = 0.4,
  grayscale = 0,
  warp = 0,
  warpScale = 1,
  bevel = 2,
  tiltStrength = 12,
  radius = 20,
  enableTilt = true,
  intro = false,
  className = '',
  style,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: (y - 0.5) * -tiltStrength, y: (x - 0.5) * tiltStrength });
      setMousePos({ x, y });
    });
  }, [enableTilt, tiltStrength]);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setTilt({ x: 0, y: 0 });
      setMousePos({ x: 0.5, y: 0.5 });
    });
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const tintHex = tint.replace('#', '');
  const r = parseInt(tintHex.slice(0, 2) || 'ff', 16);
  const g = parseInt(tintHex.slice(2, 4) || 'ff', 16);
  const b = parseInt(tintHex.slice(4, 6) || 'ff', 16);
  const tintOpacity = metalness * 0.18;
  const blurPx = blurStrength * (1 - metalness * 0.3);
  const surfaceOpacity = 1 - roughness * 0.5;
  const warpAmount = warp * warpScale * 6;
  const glareX = mousePos.x * 100;
  const glareY = mousePos.y * 100;

  const transform = [
    'perspective(900px)',
    `rotateX(${tilt.x}deg)`,
    `rotateY(${tilt.y}deg)`,
  ].join(' ');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        borderRadius: radius + warpAmount,
        transform,
        transition: 'transform 0.1s cubic-bezier(0.23,1,0.32,1), opacity 0.55s ease',
        opacity: intro ? (mounted ? 1 : 0) : 1,
        willChange: 'transform',
        ...style,
      }}
    >
      {bevel > 0 && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: -bevel,
            borderRadius: radius + bevel + warpAmount,
            background: `linear-gradient(135deg,
              rgba(255,255,255,${0.55 * metalness}) 0%,
              rgba(${r},${g},${b},${0.3 * metalness}) 40%,
              rgba(80,60,20,${0.22 * metalness}) 70%,
              rgba(255,255,255,${0.35 * metalness}) 100%)`,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          borderRadius: radius + warpAmount,
          overflow: 'hidden',
          zIndex: 1,
          backdropFilter: `blur(${blurPx}px) saturate(${1 + metalness * 0.8})`,
          WebkitBackdropFilter: `blur(${blurPx}px) saturate(${1 + metalness * 0.8})`,
          background: `linear-gradient(135deg,
            rgba(${r},${g},${b},${tintOpacity + 0.08}) 0%,
            rgba(${r},${g},${b},${tintOpacity + 0.03}) 100%)`,
          border: `1px solid rgba(${r},${g},${b},${0.18 + metalness * 0.12})`,
          boxShadow: `
            0 ${4 + tiltStrength * 0.4}px ${20 + metalness * 20}px rgba(0,0,0,${0.16 + metalness * 0.1}),
            inset 0 1px 1px rgba(255,255,255,${0.5 * metalness}),
            inset 0 -1px 1px rgba(0,0,0,${0.08 * metalness})`,
          filter: grayscale > 0 ? `grayscale(${grayscale})` : undefined,
          opacity: surfaceOpacity,
        }}
      >
        {/* Specular sweep */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
            background: `radial-gradient(ellipse 65% 55% at ${glareX}% ${glareY}%,
              rgba(255,255,255,${shine * 0.4}) 0%,
              rgba(255,255,255,0) 70%)`,
            transition: 'background 0.05s linear',
          }}
        />
        {/* Glare hotspot */}
        {glare > 0 && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              pointerEvents: 'none',
              background: `radial-gradient(circle 25% at ${glareX}% ${glareY}%,
                rgba(255,255,255,${glare * 0.55}) 0%,
                rgba(255,255,255,0) 70%)`,
              transition: 'background 0.08s linear',
              mixBlendMode: 'overlay',
            }}
          />
        )}
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 4 }}>
          {children}
          {(name || role) && !children && (
            <div className="p-6">
              {name && <p className="font-serif font-bold text-lg">{name}</p>}
              {role && <p className="text-xs opacity-70 mt-0.5">{role}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
