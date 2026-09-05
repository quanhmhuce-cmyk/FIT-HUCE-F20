import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { ArrowUpRight, Heart, Sparkles, Send, ShieldCheck, Check } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.3)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-blue-900/90 via-slate-900 to-cyan-950 border border-blue-500/40 shadow-2xl shadow-blue-950 text-center overflow-hidden">
          
          {/* Top Decorative Sparkles */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>ĐỪNG ĐỂ THANH XUÂN TRÔI QUA LÃNG PHÍ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Sẵn Sàng Khoác Lên Mình{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Màu Áo Xanh Tình Nguyện?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hãy nộp đơn tham gia thế hệ <strong className="text-cyan-300">{SITE_CONFIG.generation}</strong> ngay hôm nay để trở thành một phần của đại gia đình <strong className="text-white">{SITE_CONFIG.teamName}</strong>. Cùng nhau học tập, trải nghiệm và cống hiến!
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              id="cta-bottom-register"
              href={SITE_CONFIG.formRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/40 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>ĐĂNG KÍ NGAY TẠI ĐÂY</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 transition"
            >
              <span>Nhắn tin qua Fanpage</span>
            </a>
          </div>

          {/* 3 Quick highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-left text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Không yêu cầu kinh nghiệm trước</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Được đào tạo kỹ năng & chuyên môn</span>
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-end">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cơ hội mở rộng networking & gắn kết</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
