import React from 'react';
import { RECRUITMENT_TIMELINE, SITE_CONFIG } from '../data/content';
import { Calendar, ArrowUpRight, CheckCircle2, Clock, Sparkles, ZoomIn } from 'lucide-react';

interface TimelineSectionProps {
  timelineImageUrl: string;
  onViewImage?: (url: string, title: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timelineImageUrl, onViewImage }) => {
  return (
    <section id="timeline" className="py-14 sm:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lộ Trình Tuyển Thành Viên</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Quy Trình Gia Nhập Thế Hệ F18
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-xl mx-auto">
            Hành trình 4 bước tinh gọn để trở thành một phần của Đội SVTN Khoa Công Nghệ Thông Tin.
          </p>
        </div>

        {/* Original Timeline Graphic Showcase with tap-to-zoom */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-r from-blue-600/30 via-cyan-500/40 to-blue-600/30 shadow-xl">
          <div 
            className="rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-950 p-3 sm:p-8 flex flex-col items-center justify-center border border-slate-800 cursor-pointer group"
            onClick={() => onViewImage && onViewImage(timelineImageUrl, 'Lịch trình Tuyển CTV F18 FIT HUCE')}
          >
            <div className="w-full flex items-center justify-between pb-2 text-[11px] text-slate-400 border-b border-slate-800/80 mb-3 sm:hidden">
              <span className="text-cyan-300 font-semibold">Infographic Lộ Trình Tuyển</span>
              <span className="flex items-center gap-1 text-cyan-400">
                <ZoomIn className="w-3 h-3" />
                <span>Chạm để phóng to</span>
              </span>
            </div>

            <img
              src={timelineImageUrl}
              alt="Timeline Tuyển CTV F18 FIT HUCE"
              className="w-full max-h-56 sm:max-h-72 object-contain group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* MOBILE VIEW: Connected Vertical Stepper (Gold standard for mobile UX) */}
        <div className="sm:hidden relative pl-6 pr-2 mb-10 space-y-6">
          {/* Glowing vertical connector line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-700" />

          {RECRUITMENT_TIMELINE.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-4">
              {/* Connected Step Circle Node */}
              <div
                className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-lg ${
                  step.status === 'current'
                    ? 'bg-gradient-to-tr from-blue-600 to-cyan-400 text-white ring-4 ring-cyan-500/20 shadow-cyan-500/50'
                    : 'bg-slate-900 border border-slate-700 text-slate-400'
                }`}
              >
                0{step.step}
              </div>

              {/* Step Card Content */}
              <div
                className={`flex-1 rounded-2xl p-4 border transition-all ${
                  step.status === 'current'
                    ? 'bg-gradient-to-b from-blue-950/90 to-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  {step.status === 'current' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {step.time}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium text-slate-400 bg-slate-900 border border-slate-800 shrink-0">
                      <Clock className="w-2.5 h-2.5" />
                      {step.time}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {step.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-slate-400">Trạng thái:</span>
                  <span className={step.status === 'current' ? 'text-cyan-300 font-semibold' : 'text-slate-500'}>
                    {step.status === 'current' ? 'Đang mở cổng nộp đơn' : 'Sắp diễn ra'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: 4 Cards Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {RECRUITMENT_TIMELINE.map((step, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                step.status === 'current'
                  ? 'bg-gradient-to-b from-blue-950/80 to-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-950/40 scale-[1.02]'
                  : 'bg-slate-950/70 border-slate-800 hover:border-blue-500/30'
              }`}
            >
              {/* Step indicator top */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-2xl font-black font-mono ${
                    step.status === 'current' ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    0{step.step}
                  </span>

                  {step.status === 'current' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {step.time}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step footer check */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Trạng thái:</span>
                <span className={step.status === 'current' ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                  {step.status === 'current' ? 'Mở cổng nộp đơn' : 'Sắp diễn ra'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Register Button */}
        <div className="text-center">
          <a
            id="timeline-btn-apply"
            href={SITE_CONFIG.formRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl sm:rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/25 active:scale-95 transition-all duration-300"
          >
            <span>ĐĂNG KÍ GIA NHẬP F18 NGAY</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

