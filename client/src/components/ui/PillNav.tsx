import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface PillNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface PillNavProps {
  logo?: React.ReactNode;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  itemStyle?: 'pill' | 'underline' | 'none';
  hoverEffect?: 'fill' | 'glow' | 'scale';
  indicator?: 'dot' | 'bar' | 'none';
  layout?: 'split' | 'left' | 'center' | 'right';
  surface?: 'glass' | 'solid' | 'blur';
  size?: 'sm' | 'md' | 'lg';
  bounce?: number;
  stretch?: number;
  collapse?: 'auto' | 'never' | 'always';
  intro?: boolean;
  rightSlot?: React.ReactNode;
  className?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt,
  items,
  activeHref,
  itemStyle = 'pill',
  hoverEffect = 'fill',
  indicator = 'dot',
  layout = 'split',
  surface = 'glass',
  size = 'md',
  bounce = 0.3,
  stretch = 0.5,
  collapse = 'auto',
  intro = false,
  rightSlot,
  className = '',
}) => {
  const location = useLocation();
  const isActive = (href: string) => (activeHref ?? location.pathname) === href;

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const sizeMap = {
    sm: { px: 'px-3 py-1', text: 'text-xs', gap: 'gap-3' },
    md: { px: 'px-4 py-1.5', text: 'text-[13px]', gap: 'gap-4' },
    lg: { px: 'px-5 py-2', text: 'text-sm', gap: 'gap-5' },
  };
  const sz = sizeMap[size];

  const surfaceStyle: React.CSSProperties = surface === 'glass'
    ? {
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(18px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.5)',
        borderBottom: '1px solid rgba(200,164,77,0.18)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 1px 8px rgba(0,0,0,0.04)',
      }
    : surface === 'blur'
    ? {
        background: 'rgba(252,252,250,0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(231,229,228,0.8)',
      }
    : {
        background: '#ffffff',
        borderBottom: '1px solid #e7e5e4',
      };

  const renderItem = (item: PillNavItem, idx: number, isMobile = false) => {
    const active_ = isActive(item.href);
    const hovered = hoveredIdx === idx;
    const baseClass = [
      'relative flex items-center font-semibold tracking-wide uppercase transition-all select-none',
      sz.text,
      sz.px,
      isMobile ? 'w-full rounded-xl py-3 px-4' : 'rounded-full',
    ].join(' ');

    const bgColor = active_
      ? 'linear-gradient(135deg, #e5ca68 0%, #c8a44d 50%, #b8932e 100%)'
      : hovered && hoverEffect === 'fill'
      ? 'rgba(200,164,77,0.12)'
      : 'transparent';

    const textColor = active_ ? '#111111' : '#374151';

    const springStyle: React.CSSProperties = hovered && !active_
      ? { transform: `scale(${1 + stretch * 0.06})`, transition: `transform ${bounce * 300}ms cubic-bezier(0.34,1.56,0.64,1)` }
      : { transform: 'scale(1)', transition: `transform ${bounce * 200}ms ease` };

    return (
      <Link
        key={item.href}
        to={item.href}
        onMouseEnter={() => setHoveredIdx(idx)}
        onMouseLeave={() => setHoveredIdx(null)}
        className={baseClass}
        style={{
          background: itemStyle === 'pill' ? bgColor : 'transparent',
          color: textColor,
          fontWeight: active_ ? 700 : 600,
          boxShadow: active_ && itemStyle === 'pill' ? '0 2px 8px rgba(200,164,77,0.3)' : undefined,
          textDecoration: 'none',
          ...springStyle,
        }}
        aria-current={active_ ? 'page' : undefined}
      >
        {item.icon && <span className="mr-1.5 opacity-75">{item.icon}</span>}
        {item.label}

        {/* Indicator dot */}
        {indicator === 'dot' && active_ && (
          <span
            style={{
              position: 'absolute',
              bottom: itemStyle === 'pill' ? -6 : -4,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#c8a44d',
              display: isMobile ? 'none' : 'block',
            }}
          />
        )}
        {/* Indicator bar */}
        {indicator === 'bar' && active_ && itemStyle !== 'pill' && (
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: '10%',
              right: '10%',
              height: 2,
              borderRadius: 1,
              background: 'linear-gradient(90deg, #c8a44d, #e5ca68)',
            }}
          />
        )}
      </Link>
    );
  };

  const showMobileToggle = collapse === 'always' || (collapse === 'auto');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${className}`}
        style={{
          ...surfaceStyle,
          opacity: intro ? (mounted ? 1 : 0) : 1,
          transition: 'opacity 0.5s ease, background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center ${
            layout === 'split' ? 'justify-between' :
            layout === 'center' ? 'justify-center' : 'justify-start'
          }`}
          style={{ height: size === 'sm' ? 52 : size === 'lg' ? 68 : 60 }}
        >
          {/* Logo */}
          {logo && (
            <div className="flex items-center shrink-0">
              {typeof logo === 'string' ? (
                <img src={logo} alt={logoAlt || 'Logo'} className="h-8 w-auto" />
              ) : (
                logo
              )}
            </div>
          )}

          {/* Desktop Nav */}
          <nav
            ref={navRef}
            className={`hidden lg:flex items-center ${sz.gap}`}
            style={{ flex: layout === 'split' ? 'none' : 1, justifyContent: layout === 'split' ? undefined : 'center' }}
          >
            {items.map((item, idx) => renderItem(item, idx))}
          </nav>

          {/* Right slot */}
          {rightSlot && (
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              {rightSlot}
            </div>
          )}

          {/* Mobile hamburger */}
          {showMobileToggle && (
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded-xl border border-[#E7E5E4] bg-white/80 backdrop-blur text-[#111] hover:border-[#C8A44D]/60 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span style={{ display: 'block', position: 'relative', width: 20, height: 14 }}>
                {[0, 7, 14].map((y, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'block',
                      position: 'absolute',
                      left: 0,
                      top: y,
                      width: mobileOpen && i === 0 ? 20 : mobileOpen && i === 1 ? 0 : mobileOpen && i === 2 ? 20 : 20,
                      height: 2,
                      borderRadius: 1,
                      background: '#374151',
                      transformOrigin: 'center',
                      transform: mobileOpen
                        ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 1 ? 'scaleX(0)' : 'translateY(-7px) rotate(-45deg)'
                        : 'none',
                      transition: 'transform 0.25s ease, width 0.25s ease',
                    }}
                  />
                ))}
              </span>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className="lg:hidden fixed inset-0 z-30"
        style={{
          pointerEvents: mobileOpen ? 'auto' : 'none',
          opacity: mobileOpen ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            paddingTop: size === 'sm' ? 52 : size === 'lg' ? 68 : 60,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'transform 0.25s cubic-bezier(0.23,1,0.32,1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <nav className="flex flex-col p-4 gap-1">
            {items.map((item, idx) => renderItem(item, idx, true))}
            {rightSlot && <div className="mt-3 pt-3 border-t border-[#e7e5e4]">{rightSlot}</div>}
          </nav>
        </div>
      </div>
    </>
  );
};

export default PillNav;
