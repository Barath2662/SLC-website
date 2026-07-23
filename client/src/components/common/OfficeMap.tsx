import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { Button } from '@/components/ui/Button';

export const OfficeMap: React.FC = () => {
  const lat = BRAND_DETAILS.address.latitude;
  const lng = BRAND_DETAILS.address.longitude;

  // Zoom 17 bounding box calculation around exact GPS center (10.9968832, 77.0184343)
  const minLon = (lng - 0.003).toFixed(7);
  const minLat = (lat - 0.003).toFixed(7);
  const maxLon = (lng + 0.003).toFixed(7);
  const maxLat = (lat + 0.003).toFixed(7);

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 bg-dark-card shadow-2xl relative">
      {/* Interactive Map Embed Frame centered on exact coordinates */}
      <div className="relative w-full h-[360px] bg-slate-900 overflow-hidden">
        <iframe
          title="Srii Lakshmi Cab Location Map"
          src={embedUrl}
          className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none border border-gold-500/20 rounded-3xl" />
      </div>

      {/* Map Overlay Card */}
      <div className="p-6 bg-dark-card border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-white text-base">{BRAND_DETAILS.name}</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">{BRAND_DETAILS.address.full}</p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button variant="outline" size="sm" leftIcon={<Navigation className="w-4 h-4 text-gold-500" />} rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
            Get Directions
          </Button>
        </a>
      </div>
    </div>
  );
};
