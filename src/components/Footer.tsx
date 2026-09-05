import React from 'react';
import { SITE_CONFIG } from '../data/content';
import { ArrowUpRight, Heart, Send, Globe, ChevronUp } from 'lucide-react';

interface FooterProps {
  connectImageUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ connectImageUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md shrink-0">
                <img
                  src={`${SITE_CONFIG.originalImagesBaseUrl}logotrn.png`}
                  alt="Logo Đội SVTN Khoa CNTT"
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {SITE_CONFIG.teamName}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-cyan-300 font-mono border border-cyan-400/30">
                    F20
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              Tổ chức tình nguyện trực thuộc Khoa CNTT. Thành lập từ năm 2006 với tinh thần kỷ luật, nhiệt huyết và cống hiến vì cộng đồng.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
              <a
                href={SITE_CONFIG.formRegisterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-blue-500/30 transition font-semibold"
              >
                <span>Đơn Đăng Ký TTVF20</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Connect banner & Social Media Links */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end space-y-6">
            
            {/* Original CONNECT Graphic */}
            <div className="rounded-2xl bg-slate-900/60 p-4 border border-slate-800 max-w-xs flex items-center justify-center">
              <img
                src={connectImageUrl}
                alt="Connect FIT HUCE"
                className="max-h-24 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Social channels (Facebook & TikTok as in original) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              
              {/* Facebook Button */}
              <a
                id="footer-link-facebook"
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-white border border-blue-500/40 text-sm font-semibold transition-all group"
              >
                {/* Facebook icon */}
                <svg className="w-4 h-4 fill-current text-blue-400 group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook: Đội SVTN khoa CNTT</span>
              </a>

              {/* TikTok Button */}
              <a
                id="footer-link-tiktok"
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-sm font-semibold transition-all group"
              >
                {/* TikTok icon */}
                <svg className="w-4 h-4 fill-current text-cyan-400 group-hover:text-white" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span>TikTok: Đội SVTN khoa CNTT</span>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom copyright line with original backlink citation */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()}</span>
            <strong className="text-slate-400">{SITE_CONFIG.campaignTitle}</strong>.
            <span>Bản quyền nội dung thuộc về FIT – HUCE.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition"
          >
            <span>Lên đầu trang</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
