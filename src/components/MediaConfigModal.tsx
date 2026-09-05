import React, { useState } from 'react';
import { X, Check, RotateCcw, Image, Video, HelpCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface MediaConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  bannerUrl: string;
  setBannerUrl: (url: string) => void;
  nightImageUrl: string;
  setNightImageUrl: (url: string) => void;
  timelineImageUrl: string;
  setTimelineImageUrl: (url: string) => void;
  videoId: string;
  setVideoId: (id: string) => void;
  onResetDefaults: () => void;
}

export const MediaConfigModal: React.FC<MediaConfigModalProps> = ({
  isOpen,
  onClose,
  bannerUrl,
  setBannerUrl,
  nightImageUrl,
  setNightImageUrl,
  timelineImageUrl,
  setTimelineImageUrl,
  videoId,
  setVideoId,
  onResetDefaults,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Tùy Chỉnh Link Ảnh & Video
              </h3>
              <p className="text-xs text-slate-400">
                Bạn có thể dán link ảnh/video mới để xem thử giao diện ngay lập tức
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="py-6 space-y-5">
          {/* Banner URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Image className="w-3.5 h-3.5 text-blue-400" />
              <span>Link Ảnh Bìa Hero Banner:</span>
            </label>
            <input
              type="text"
              value={bannerUrl}
              onChange={(e) => setBannerUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white focus:outline-none font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Gốc: {SITE_CONFIG.originalImagesBaseUrl}anh-biaFINAL.png
            </p>
          </div>

          {/* YouTube Video ID */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span>Mã YouTube Video ID (hoặc link):</span>
            </label>
            <input
              type="text"
              value={videoId}
              onChange={(e) => {
                let val = e.target.value.trim();
                // If user pasted a full youtube url, extract the ID
                if (val.includes('v=')) {
                  val = val.split('v=')[1]?.split('&')[0] || val;
                } else if (val.includes('youtu.be/')) {
                  val = val.split('youtu.be/')[1]?.split('?')[0] || val;
                }
                setVideoId(val);
              }}
              placeholder="vSuB3dWmbwI"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white focus:outline-none font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Video gốc: vSuB3dWmbwI (Bạn có thể dán link youtube bất kỳ vào đây)
            </p>
          </div>

          {/* Night / Story image URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Image className="w-3.5 h-3.5 text-cyan-400" />
              <span>Link Ảnh Mục Giới Thiệu (Night Image):</span>
            </label>
            <input
              type="text"
              value={nightImageUrl}
              onChange={(e) => setNightImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white focus:outline-none font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Gốc: {SITE_CONFIG.originalImagesBaseUrl}night.png
            </p>
          </div>

          {/* Timeline Image */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <Image className="w-3.5 h-3.5 text-amber-400" />
              <span>Link Ảnh Timeline / Lịch Trình Tuyển:</span>
            </label>
            <input
              type="text"
              value={timelineImageUrl}
              onChange={(e) => setTimelineImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white focus:outline-none font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Gốc: {SITE_CONFIG.originalImagesBaseUrl}TIMELINE.png
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Mẹo cho bạn:</span> Các thiết lập này được lưu ngay trong trình duyệt. Khi bạn sẵn sàng thay ảnh cố định trong mã nguồn, bạn chỉ cần mở file <code className="text-cyan-300 font-mono">src/data/content.ts</code> để cập nhật các đường link.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi phục mặc định</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition"
          >
            <Check className="w-4 h-4" />
            <span>Áp Dụng & Đóng</span>
          </button>
        </div>

      </div>
    </div>
  );
};
