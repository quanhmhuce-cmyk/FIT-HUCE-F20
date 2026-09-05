import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { ArrowUpRight, MessageCircle, Calendar, Image as ImageIcon, Users, Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenMediaModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenMediaModal }) => {
  return (
    <aside
      aria-label="Thanh điều hướng nhanh trên di động"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/20 shadow-2xl shadow-blue-950 px-2 pt-2 pb-safe"
    >
      <div className="flex items-center justify-between gap-1 max-w-md mx-auto">
        {/* Button 1: Fanpage */}
        <a
          href={SITE_CONFIG.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-400 hover:text-white active:bg-slate-900 transition-colors"
          title="Nhắn tin qua Fanpage Facebook"
        >
          <div className="w-5 h-5 flex items-center justify-center text-blue-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Fanpage</span>
        </a>

        {/* Button 2: Các Ban */}
        <a
          href="#departments"
          className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-400 hover:text-white active:bg-slate-900 transition-colors"
        >
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">4 Ban</span>
        </a>

        {/* Center Primary CTA: ỨNG TUYỂN F18 */}
        <a
          id="mobile-bottom-apply-btn"
          href={SITE_CONFIG.formRegisterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative -top-2 flex items-center gap-1.5 px-4 py-2.5 rounded-full font-extrabold text-xs text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg shadow-blue-600/50 border border-cyan-400/40 active:scale-95 transition-transform"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="tracking-wide">ỨNG TUYỂN F18</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
        </a>

        {/* Button 4: Lịch trình F18 */}
        <a
          href="#timeline"
          className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-400 hover:text-white active:bg-slate-900 transition-colors"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Lịch trình</span>
        </a>

        {/* Button 5: Khoảnh khắc Ảnh */}
        <a
          href="#gallery"
          className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl text-slate-400 hover:text-white active:bg-slate-900 transition-colors"
        >
          <ImageIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-medium mt-0.5 whitespace-nowrap">Bộ ảnh</span>
        </a>
      </div>
    </aside>
  );
};
