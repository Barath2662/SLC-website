import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/context/ContactModalContext';
import PillNav from '@/components/ui/PillNav';

export const Navbar: React.FC = () => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  const navItems = [
    { label: 'Home', href: ROUTES.HOME },
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Fleet', href: ROUTES.FLEET },
    { label: 'Services', href: ROUTES.SERVICES },
    { label: 'Destinations', href: ROUTES.DESTINATIONS },
    { label: 'Gallery', href: ROUTES.GALLERY },
    { label: 'FAQ', href: ROUTES.FAQ },
    { label: 'Contact', href: ROUTES.CONTACT },
  ];

  const logo = (
    <Link to={ROUTES.HOME} className="flex items-center space-x-3 group cursor-pointer" style={{ textDecoration: 'none' }}>
      <div className="w-9 h-9 rounded-xl gold-gradient-bg flex items-center justify-center font-serif font-extrabold text-black text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
        {BRAND_DETAILS.shortName}
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-serif font-extrabold text-base sm:text-lg tracking-wider text-[#111111] group-hover:text-[#C8A44D] transition-colors">
          {BRAND_DETAILS.name}
        </span>
        <span className="text-[9px] uppercase tracking-widest text-[#C8A44D] font-semibold mt-0.5">
          Since {BRAND_DETAILS.establishedYear} · Coimbatore
        </span>
      </div>
    </Link>
  );

  const rightSlot = (
    <div className="flex items-center gap-2">
      <Button
        variant="primary"
        size="sm"
        onClick={openCallModal}
        leftIcon={<Phone className="w-3.5 h-3.5" />}
      >
        Call Us
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openWhatsAppModal()}
        leftIcon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />}
      >
        WhatsApp
      </Button>
    </div>
  );

  return (
    <PillNav
      logo={logo}
      items={navItems}
      itemStyle="pill"
      hoverEffect="fill"
      indicator="dot"
      layout="split"
      surface="glass"
      size="md"
      bounce={0.3}
      stretch={0.5}
      collapse="auto"
      intro
      rightSlot={rightSlot}
    />
  );
};
