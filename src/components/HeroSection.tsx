import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { ArrowUpRight, Play, Heart, Terminal, Users, Sparkles, ChevronDown, ZoomIn } from 'lucide-react';

interface HeroSectionProps {
  bannerUrl: string;
  onViewImage?: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ bannerUrl, onViewImage }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 sm:pt-28 pb-10 sm:pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Decorative Gradient & Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(29,78,216,0.35)_0%,rgba(6,182,212,0.15)_35%,transparent_75%)] -z-10 pointer-events-none" />
      
      {/* Tech Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Badge: Volunteer Blue x Tech Cyan */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-900/50 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg shadow-blue-950/50 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="font-mono tracking-wide">{SITE_CONFIG.generation}</span>
            <span className="text-slate-500">•</span>
            <span className="truncate max-w-[200px] xs:max-w-none">MỞ ĐƠN TUYỂN CỘNG TÁC VIÊN</span>
          </div>

          {/* Main Headline - Mobile Optimized Sizing */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.2] max-w-5xl mb-4 sm:mb-6">
            Màu Áo Xanh{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Tình Nguyện
            </span>
            <br />
            Bản Lĩnh Người{' '}
            <span className="relative inline-block text-white">
              Công Nghệ
              <svg
                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-cyan-500/60"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          {/* Subheading with original context */}
          <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6 sm:mb-8 px-1">
            Chào mừng bạn đến với mái nhà chung của{' '}
            <strong className="text-white font-semibold">{SITE_CONFIG.teamName}</strong>{' '}
            – <strong className="text-cyan-300 font-semibold">{SITE_CONFIG.schoolName}</strong>.
            Nơi nhiệt huyết thanh xuân gặp gỡ tinh thần kỷ luật và sức mạnh công nghệ số!
          </p>

          {/* CTA Button Group - Thumb Friendly Touch Sizing */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14 w-full max-w-md sm:max-w-none">
            <a
              id="hero-btn-apply"
              href={SITE_CONFIG.formRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl sm:rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/35 hover:shadow-cyan-500/25 active:scale-95 transition-all duration-300 min-h-[48px]"
            >
              <span className="tracking-wide">ỨNG TUYỂN F18 NGAY</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </a>

            <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#video"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full text-xs sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-blue-500/50 shadow-md active:scale-95 transition-all min-h-[44px]"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                </div>
                <span>Xem Video</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-full text-xs sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 sm:bg-transparent border border-slate-800 sm:border-transparent transition-colors min-h-[44px]"
              >
                <span>Về Đội</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce shrink-0" />
              </a>
            </div>
          </div>

          {/* Banner Media Showcase Card with Tap-to-Zoom */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-blue-500/40 via-cyan-500/20 to-transparent shadow-2xl shadow-blue-950/70 group">
            <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] bg-slate-900 border border-slate-800">
              
              {/* Window Header bar (Tech detail) */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-slate-950/80 border-b border-slate-800 text-[11px] sm:text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-1.5 text-slate-400 hidden sm:inline">fit-huce.github.io/ttvf18</span>
                </div>
                
                {/* Click to Zoom Banner Badge */}
                <button
                  type="button"
                  onClick={() => onViewImage && onViewImage(bannerUrl, 'Ảnh Bìa Tuyển CTV F18')}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 bg-blue-950/60 hover:bg-blue-900/60 px-2.5 py-1 rounded-lg border border-blue-500/30 transition text-[11px]"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>Phóng to ảnh</span>
                </button>
              </div>

              {/* Main Banner Image with Tap Gesture */}
              <div 
                className="relative aspect-[16/8] sm:aspect-[21/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => onViewImage && onViewImage(bannerUrl, 'Ảnh Bìa Tuyển CTV F18')}
              >
                <img
                  src={bannerUrl}
                  alt="Đội SVTN Khoa Công Nghệ Thông Tin Tuyển CTV F18"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback Graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-blue-950/90 via-slate-900 to-slate-950 -z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-300 mb-3">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                    TUYỂN CỘNG TÁC VIÊN THẾ HỆ F18
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300/80 font-mono">
                    Đội SVTN Khoa CNTT – ĐH Xây Dựng Hà Nội
                  </p>
                </div>

                {/* Mobile tap helper badge */}
                <div className="absolute bottom-2 right-2 sm:hidden px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[10px] text-cyan-300 flex items-center gap-1 border border-cyan-500/30">
                  <ZoomIn className="w-3 h-3" />
                  <span>Chạm phóng to</span>
                </div>

                {/* Floating Badges on Banner */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-blue-500/40 text-[10px] sm:text-xs font-semibold text-white flex items-center gap-1.5 sm:gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Đang nhận hồ sơ</span>
                  </div>
                  <div className="hidden sm:flex px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-xs font-mono text-cyan-300">
                    #TTVF18 #FITHUCE #TinhNguyen
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

