import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/content';
import { Laptop, Camera, Sparkles, Handshake, Check } from 'lucide-react';

export const DepartmentsSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Handshake':
      default:
        return <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
    }
  };

  const filteredDepts =
    selectedDept === 'all'
      ? DEPARTMENTS
      : DEPARTMENTS.filter((d) => d.name.toLowerCase().includes(selectedDept.toLowerCase()));

  return (
    <section id="departments" className="py-14 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Môi Trường Phát Triển Toàn Diện</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Các Ban Chuyên Môn Trong Đội
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-xl mx-auto">
            Dù bạn đam mê kỹ thuật công nghệ, sáng tạo nội dung, tổ chức sự kiện hay kết nối cộng đồng, luôn có một vị trí dành riêng cho bạn.
          </p>
        </div>

        {/* Mobile Quick Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-10">
          <button
            onClick={() => setSelectedDept('all')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
              selectedDept === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Tất cả 4 Ban
          </button>
          <button
            onClick={() => setSelectedDept('kỹ thuật')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
              selectedDept === 'kỹ thuật'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            💻 Ban Kỹ Thuật
          </button>
          <button
            onClick={() => setSelectedDept('truyền thông')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
              selectedDept === 'truyền thông'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            📸 Ban Truyền Thông
          </button>
          <button
            onClick={() => setSelectedDept('sự kiện')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
              selectedDept === 'sự kiện'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            ✨ Ban Sự Kiện
          </button>
          <button
            onClick={() => setSelectedDept('đối ngoại')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition active:scale-95 ${
              selectedDept === 'đối ngoại'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            🤝 Ban Đối Ngoại & Hậu Cần
          </button>
        </div>

        {/* 4 Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {filteredDepts.map((dept, index) => (
            <div
              key={index}
              className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-950/60 flex flex-col justify-between"
            >
              {/* Card top */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shadow-md shrink-0">
                    {getIcon(dept.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider bg-blue-600/15 text-blue-300 border border-blue-500/20 text-right">
                    {dept.tagline}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs sm:text-base text-slate-300 mt-2 sm:mt-3 leading-relaxed">
                  {dept.desc}
                </p>
              </div>

              {/* Skills and tags */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-800/80">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 sm:mb-3">
                  Kỹ năng rèn luyện:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {dept.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

