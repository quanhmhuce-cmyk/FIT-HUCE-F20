import React, { useState, useEffect } from 'react';
import { Sparkles, Users, Calendar, Image as ImageIcon, Film, MessageCircle, Heart } from 'lucide-react';

export const QuickNavPills: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navItems = [
    { id: 'hero', label: '⚡ Tuyển CTV F18', href: '#hero' },
    { id: 'about', label: '📖 Về Đội (2006)', href: '#about' },
    { id: 'departments', label: '👥 4 Ban Chuyên Môn', href: '#departments' },
    { id: 'timeline', label: '📅 Lộ Trình 4 Vòng', href: '#timeline' },
    { id: 'gallery', label: '📸 Khoảnh Khắc Áo Xanh', href: '#gallery' },
    { id: 'video', label: '🎬 Video Giới Thiệu', href: '#video' },
    { id: 'footer', label: '💬 Liên Hệ & Mạng Xã Hội', href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-[60px] sm:top-[72px] z-30 w-full py-2 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
