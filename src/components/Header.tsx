import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Smile, Calendar, Heart } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
  activeSection: string;
}

export default function Header({ onBookClick, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-11 h-11 bg-dental-blue-500 rounded-xl text-white shadow-md shadow-dental-blue-500/20 group-hover:bg-dental-blue-600 transition-colors">
              <Heart className="w-5 h-5 absolute fill-white/10 text-white animate-pulse" />
              <Smile className="w-6 h-6 z-10 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-dental-blue-800 tracking-tight">
                GentleCare
              </span>
              <span className="font-sans text-xs font-semibold tracking-widest text-dental-blue-500 uppercase leading-none">
                Dental Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-sans font-medium text-[15px] transition-colors relative py-2 ${
                    isActive 
                      ? 'text-dental-blue-500' 
                      : 'text-slate-600 hover:text-dental-blue-500'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-dental-blue-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:6195550187" 
              className="flex items-center gap-2 text-dental-blue-500 font-semibold text-base hover:text-dental-blue-600 transition-colors group"
            >
              <div className="flex items-center justify-center w-9 h-9 bg-dental-blue-50 rounded-full group-hover:bg-dental-blue-100 transition-colors">
                <Phone className="w-4 h-4 text-dental-blue-500 fill-dental-blue-500" />
              </div>
              <span className="font-display">(619) 555-0187</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-dental-blue-500 text-white font-sans font-semibold rounded-xl text-[14px] hover:bg-dental-blue-600 transition-all duration-200 transform active:scale-98 shadow-sm hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <a 
              href="tel:6195550187"
              className="flex items-center justify-center w-10 h-10 bg-dental-blue-50 rounded-lg"
            >
              <Phone className="w-5 h-5 text-dental-blue-500 fill-dental-blue-500" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-50/80 focus:outline-hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-slate-700 hover:text-dental-blue-500 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-slate-500">Need help? Call us:</span>
                  <a href="tel:6195550187" className="text-sm font-bold text-dental-blue-500 hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 fill-dental-blue-500" />
                    (619) 555-0187
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-dental-blue-500 hover:bg-dental-blue-600 text-white font-semibold rounded-xl text-[15px] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
