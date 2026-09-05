import React from 'react';
import { ABOUT_ORIGINAL_TEXT, HIGHLIGHT_STATS, SITE_CONFIG } from '../data/content';
import { Flag, Flame, ShieldCheck, HeartHandshake, Quote, Award, Sparkles, CheckCircle2, ZoomIn } from 'lucide-react';

interface AboutSectionProps {
  nightImageUrl: string;
  onViewImage?: (url: string, title: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ nightImageUrl, onViewImage }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Flag':
        return <Flag className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-24 relative bg-slate-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Về Đội Chúng Mình</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Hành Trình Gắn Kết & Cống Hiến
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-xl mx-auto">
            Nơi rèn luyện bản lĩnh, vun đắp kỹ năng và cùng nhau tạo nên những dấu ấn thanh xuân không thể nào quên.
          </p>
        </div>

        {/* Two Column Layout: Main Story & Media Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          
          {/* Left Column: Original Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="relative p-5 sm:p-9 rounded-2xl sm:rounded-3xl bg-slate-950/70 border border-slate-800 shadow-xl backdrop-blur-sm">
              <Quote className="w-8 sm:w-12 h-8 sm:h-12 text-blue-500/20 absolute -top-3 -left-1 sm:-top-4 sm:-left-2 rotate-180 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wide mb-3 sm:mb-4">
                  Thành lập 2006 • {SITE_CONFIG.teamName}
                </div>

                {/* Exact Text from Original Web Link */}
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-justify">
                  {ABOUT_ORIGINAL_TEXT}
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      Tổ chức kỷ luật, hoạt động tình nguyện sôi nổi
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      Giao lưu, học hỏi kinh nghiệm từ các anh chị đi trước
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      Tôn trọng bản sắc riêng, cá tính và tài năng mỗi cá nhân
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">
                      Tinh thần vượt khó, biến thanh xuân thật đáng nhớ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Image & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl sm:rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Image Container with Tap to Zoom */}
              <div 
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] sm:aspect-square shadow-2xl flex items-center justify-center p-3 sm:p-6 cursor-pointer"
                onClick={() => onViewImage && onViewImage(nightImageUrl, 'Khoảnh khắc Đêm Nhạc & Sự Kiện Đội')}
              >
                <img
                  src={nightImageUrl}
                  alt="Đêm nhạc & Sự kiện Đội SVTN Khoa CNTT"
                  className="w-full h-full object-contain rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to logo or clean poster if offline
                    e.currentTarget.src = `${SITE_CONFIG.originalImagesBaseUrl}logotrn.png`;
                  }}
                />

                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-md border border-blue-500/30 text-left">
                  <div className="flex items-center gap-1.5 text-cyan-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Hơn 20 Năm Truyền Thống</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                    <span>Thế hệ này tiếp bước thế hệ trước</span>
                    <ZoomIn className="w-3.5 h-3.5 text-cyan-400 sm:hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Stat Highlights - 2x2 Grid on Mobile for Best Scanability */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-950/90 transition-all duration-300 group shadow-lg"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-2.5 sm:mb-4 group-hover:scale-110 group-hover:bg-blue-600/25 transition-all">
                {getIcon(stat.icon)}
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-400 mt-0.5 sm:mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-2 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

