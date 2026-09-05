import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/content';
import { Menu, X, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenMediaModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMediaModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: '3 Ban Đội', href: '#departments' },
    { label: 'Lộ trình F20', href: '#timeline' },
    { label: 'Khoảnh khắc', href: '#gallery' },
    { label: 'Video', href: '#video' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-950/30 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Info */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group text-left"
            id="nav-logo-link"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src={`${SITE_CONFIG.originalImagesBaseUrl}logotrn.png`}
                alt="Logo FIT HUCE"
                className="w-full h-full object-cover rounded-full bg-slate-900"
                onError={(e) => {
                  // Fallback if network blocked
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-white uppercase bg-blue-700/80 -z-10">
                FIT
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                ĐỘI SVTN KHOA CNTT
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-cyan-300 font-mono border border-cyan-400/30 shadow-sm">
                F20
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenMediaModal}
              title="Tuỳ chỉnh link ảnh và video nếu muốn thay thế"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-full border border-slate-700 transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tùy chỉnh Media</span>
            </button>

            <a
              id="nav-cta-register"
              href={SITE_CONFIG.formRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>ĐĂNG KÝ NGAY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.formRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition"
            >
              Đăng ký
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900/95 border border-blue-500/30 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-blue-600/30 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMediaModal();
                }}
                className="w-full text-center px-4 py-2 text-xs font-medium text-cyan-300 bg-slate-800/80 hover:bg-slate-800 rounded-xl transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tùy chỉnh link Ảnh & Video</span>
              </button>
              <a
                href={SITE_CONFIG.formRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md"
              >
                ĐĂNG KÝ GIA NHẬP F20 &gt;&gt;
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
