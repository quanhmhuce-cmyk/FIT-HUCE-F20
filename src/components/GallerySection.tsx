import React, { useState, useRef } from 'react';
import { GalleryImage } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon, Sparkles, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface GallerySectionProps {
  images: GalleryImage[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Tất cả');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const tags = ['Tất cả', ...Array.from(new Set(images.map((img) => img.tag)))];

  const filteredImages =
    activeFilter === 'Tất cả'
      ? images
      : images.filter((img) => img.tag === activeFilter);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentImage = filteredImages[currentIndex] || images[0];

  return (
    <section id="gallery" className="py-14 sm:py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Khoảnh Khắc Áo Xanh</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Thư Viện Ảnh Hoạt Động
            </h2>
            <p className="mt-2 text-xs sm:text-base text-slate-400 max-w-xl">
              Những bức ảnh ghi lại chặng đường nhiệt huyết, cống hiến và nụ cười của các chiến sĩ tình nguyện FIT – HUCE.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 self-start md:self-end">
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'slider'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Dạng Trượt</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Lưới Ảnh</span>
            </button>
          </div>
        </div>

        {/* Tag Filters - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-6 sm:mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveFilter(tag);
                setCurrentIndex(0);
              }}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition active:scale-95 ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-950/70 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* View Mode 1: Interactive Slider with Touch Swipe */}
        {viewMode === 'slider' && currentImage && (
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
            <div 
              className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full flex items-center justify-center bg-slate-950 touch-pan-y select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-full object-cover sm:object-contain transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://fit-huce.github.io/ttvf18/images/logotrn.png';
                }}
              />

              {/* Mobile Swipe Hint Badge */}
              <div className="absolute top-3 right-3 sm:hidden px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] text-cyan-300 border border-cyan-500/30 flex items-center gap-1 pointer-events-none">
                <span>Vuốt để chuyển ảnh</span>
              </div>

              {/* Gradient Overlay for Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                <div className="max-w-2xl">
                  <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-blue-500/20 text-cyan-300 border border-blue-400/30 mb-1 sm:mb-2">
                    {currentImage.tag} • Ảnh {currentIndex + 1} / {filteredImages.length}
                  </div>
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold text-white">
                    {currentImage.title}
                  </h3>
                  <p className="text-xs sm:text-base text-slate-300 mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-none">
                    {currentImage.caption}
                  </p>
                </div>

                {/* Lightbox button */}
                <button
                  onClick={() => setLightboxImage(currentImage)}
                  className="self-start sm:self-end px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/80 hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 sm:gap-2 border border-slate-700 transition backdrop-blur-md active:scale-95"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Phóng to</span>
                </button>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-700/80 transition-all opacity-80 group-hover:opacity-100 active:scale-95 backdrop-blur-sm"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-950/70 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-700/80 transition-all opacity-80 group-hover:opacity-100 active:scale-95 backdrop-blur-sm"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Thumbnail dots selector */}
            <div className="p-2.5 sm:p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
              {filteredImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-10 sm:h-12 w-14 sm:w-20 rounded-lg overflow-hidden border-2 transition shrink-0 ${
                    idx === currentIndex
                      ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://fit-huce.github.io/ttvf18/images/logotrn.png';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Grid Layout - 2 columns on Mobile */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightboxImage(img)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] cursor-pointer hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950 active:scale-95"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://fit-huce.github.io/ttvf18/images/logotrn.png';
                  }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2.5 sm:p-4 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-mono text-cyan-300 uppercase tracking-wide">
                    {img.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                    {img.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-1 mt-0.5 hidden sm:block">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-rose-600 transition"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'https://fit-huce.github.io/ttvf18/images/logotrn.png';
                  }}
                />
              </div>

              <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                    {lightboxImage.tag}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">
                    {lightboxImage.caption}
                  </p>
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-400">
                  {lightboxImage.url.replace('https://fit-huce.github.io/ttvf18/', '')}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

