import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/gallery';

export interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
      }
      if (e.key === 'ArrowRight') {
        onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
    >
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white pointer-events-none">
        <div className="flex items-center space-x-3 pointer-events-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-dark-card border border-gold-500/30">
            {currentItem.category}
          </span>
          <span className="text-xs text-slate-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-dark-card/80 border border-slate-700 text-slate-200 hover:text-white hover:border-gold-500 transition-colors pointer-events-auto cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center cursor-default"
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border border-gold-500/20 shadow-2xl"
        />

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1">
          <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-card/80 border border-slate-700 text-slate-200 hover:text-gold-400 hover:border-gold-500 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-card/80 border border-slate-700 text-slate-200 hover:text-gold-400 hover:border-gold-500 transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
