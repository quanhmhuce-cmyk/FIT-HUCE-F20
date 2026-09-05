import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/content';
import { Play, Youtube, ExternalLink, Sparkles, Film } from 'lucide-react';

interface VideoSectionProps {
  videoId: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-14 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>Thước Phim Kỷ Niệm</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Một Thoáng Thanh Xuân FIT - HUCE
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-xl mx-auto">
            Xem lại những khoảnh khắc bùng nổ, tiếng cười và nhiệt huyết của Đội qua từng thước phim.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 shadow-2xl shadow-blue-950/80">
          <div className="relative rounded-[15px] sm:rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800">
            
            {/* Aspect Ratio 16:9 */}
            <div className="relative aspect-video w-full">
              {!isPlaying ? (
                /* Custom Poster & Play Overlay */
                <div 
                  className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center group cursor-pointer overflow-hidden"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* YouTube Thumbnail Background */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      // Fallback to standard thumbnail if maxres is unavailable
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Play Button Pulsing */}
                  <button
                    className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 p-1 flex items-center justify-center shadow-2xl shadow-blue-600/60 group-hover:scale-110 active:scale-95 transition-transform duration-300"
                    aria-label="Phát video"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950/70 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 sm:w-10 sm:h-10 text-cyan-300 fill-cyan-300 ml-1 sm:ml-1.5" />
                    </div>
                  </button>

                  {/* Caption on hover */}
                  <div className="relative z-10 mt-3 sm:mt-6 text-center px-4">
                    <span className="text-white font-bold text-sm sm:text-xl block drop-shadow-md">
                      Chạm để phát video Đội
                    </span>
                    <span className="text-[11px] sm:text-sm text-cyan-300 font-mono mt-0.5 inline-block">
                      YouTube ID: {videoId}
                    </span>
                  </div>
                </div>
              ) : (
                /* Active YouTube Embed Iframe */
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Bottom info bar */}
            <div className="p-3.5 sm:p-6 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-bold text-white">
                    Giới thiệu về đội
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    {SITE_CONFIG.teamName}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Mở trên YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

