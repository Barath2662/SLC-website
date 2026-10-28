import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, X, ChevronRight } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/context/ContactModalContext';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; path: string }>;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const location = useLocation();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FCFCFA] border-l border-[#E7E5E4] shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E5E4]">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gold-gradient-bg flex items-center justify-center font-serif font-extrabold text-black text-sm">
                {BRAND_DETAILS.shortName}
              </div>
              <span className="font-serif font-bold text-[#111111] text-base">
                {BRAND_DETAILS.name}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white border border-[#E7E5E4] text-slate-500 hover:text-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#C8A44D] text-white font-bold shadow-md'
                      : 'text-[#111111] hover:bg-[#F8F6F1] hover:text-[#C8A44D]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact Actions */}
        <div className="pt-6 border-t border-[#E7E5E4] space-y-3">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => {
              onClose();
              openCallModal();
            }}
            leftIcon={<Phone className="w-4 h-4" />}
          >
            Call Desk
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full"
            onClick={() => {
              onClose();
              openWhatsAppModal();
            }}
            leftIcon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
          >
            WhatsApp Chat
          </Button>

          <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest pt-2">
            24×7 Available • Coimbatore
          </p>
        </div>
      </div>
    </div>
  );
};
