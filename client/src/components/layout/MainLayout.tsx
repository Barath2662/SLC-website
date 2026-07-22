import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingCTA } from './FloatingCTA';
import { SchemaOrg } from '@/seo/SchemaOrg';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-slate-100 font-sans antialiased selection:bg-gold-500 selection:text-black">
      {/* Schema.org LocalBusiness structured data */}
      <SchemaOrg />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating Action CTA Buttons */}
      <FloatingCTA />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
