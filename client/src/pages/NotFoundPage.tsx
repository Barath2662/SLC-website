import React from 'react';
import { Link } from 'react-router-dom';
import { MetaHead } from '@/seo/MetaHead';
import { ROUTES } from '@/constants/routes';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaHead title="404 - Page Not Found" />
      <div className="pt-28 pb-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-6">
          <Compass className="w-10 h-10 text-gold-500 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-3">
          404 - Journey Took a Wrong Turn
        </h1>
        <p className="text-slate-300 text-sm md:text-base max-w-md mb-8">
          Looks like this journey took a wrong turn. The page you are looking for might have been moved or doesn't exist.
        </p>
        <Link
          to={ROUTES.HOME}
          className="px-6 py-3 rounded-xl gold-gradient-bg text-black font-semibold text-sm flex items-center space-x-2 shadow-lg hover:brightness-110 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </>
  );
};
export default NotFoundPage;
