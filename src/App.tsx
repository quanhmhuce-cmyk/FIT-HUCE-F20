/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, GALLERY_IMAGES } from './data/content';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { GallerySection } from './components/GallerySection';
import { TimelineSection } from './components/TimelineSection';
import { VideoSection } from './components/VideoSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { MediaConfigModal } from './components/MediaConfigModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ImageViewerModal } from './components/ImageViewerModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function App() {
  // Media state initialized with original website assets
  const [bannerUrl, setBannerUrl] = useState<string>(() => {
    return localStorage.getItem('ttvf18_bannerUrl') || `${SITE_CONFIG.originalImagesBaseUrl}anh-biaFINAL.png`;
  });

  const [nightImageUrl, setNightImageUrl] = useState<string>(() => {
    return localStorage.getItem('ttvf18_nightImageUrl') || `${SITE_CONFIG.originalImagesBaseUrl}night.png`;
  });

  const [timelineImageUrl, setTimelineImageUrl] = useState<string>(() => {
    return localStorage.getItem('ttvf18_timelineImageUrl') || `${SITE_CONFIG.originalImagesBaseUrl}TIMELINE.png`;
  });

  const [connectImageUrl] = useState<string>(
    `${SITE_CONFIG.originalImagesBaseUrl}CONNECT.png`
  );

  const [videoId, setVideoId] = useState<string>(() => {
    return localStorage.getItem('ttvf18_videoId') || SITE_CONFIG.youtubeVideoId;
  });

  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  // Fullscreen ImageViewer Modal State
  const [activeViewerImage, setActiveViewerImage] = useState<{ url: string; title: string } | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('ttvf18_bannerUrl', bannerUrl);
    localStorage.setItem('ttvf18_nightImageUrl', nightImageUrl);
    localStorage.setItem('ttvf18_timelineImageUrl', timelineImageUrl);
    localStorage.setItem('ttvf18_videoId', videoId);
  }, [bannerUrl, nightImageUrl, timelineImageUrl, videoId]);

  const handleResetDefaults = () => {
    setBannerUrl(`${SITE_CONFIG.originalImagesBaseUrl}anh-biaFINAL.png`);
    setNightImageUrl(`${SITE_CONFIG.originalImagesBaseUrl}night.png`);
    setTimelineImageUrl(`${SITE_CONFIG.originalImagesBaseUrl}TIMELINE.png`);
    setVideoId(SITE_CONFIG.youtubeVideoId);
  };

  const handleViewImage = (url: string, title: string) => {
    setActiveViewerImage({ url, title });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      {/* Fixed Navigation Header */}
      <Navbar onOpenMediaModal={() => setIsMediaModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Banner with Volunteer Blue & Tech Accent */}
        <HeroSection bannerUrl={bannerUrl} onViewImage={handleViewImage} />

        {/* 2. Original Story & About Section */}
        <AboutSection nightImageUrl={nightImageUrl} onViewImage={handleViewImage} />

        {/* 3. The 3 Departments */}
        <DepartmentsSection />

        {/* 4. Recruitment Roadmap & Timeline */}
        <TimelineSection timelineImageUrl={timelineImageUrl} onViewImage={handleViewImage} />

        {/* 5. Photo Gallery (with Slider & Grid modes) */}
        <GallerySection images={GALLERY_IMAGES} />

        {/* 6. YouTube Video Showcase */}
        <VideoSection videoId={videoId} />

        {/* 7. Call To Action Form Register */}
        <CtaSection />
      </main>

      {/* Footer with Facebook, TikTok, HUCE links */}
      <Footer connectImageUrl={connectImageUrl} />

      {/* Floating CTA for Desktop Fast Access */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2 pointer-events-auto">
        <a
          id="floating-btn-apply"
          href={SITE_CONFIG.formRegisterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-900/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/40"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300"></span>
          </span>
          <span>ỨNG TUYỂN F20</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Persistent Mobile Bottom Bar (Thumb-Friendly Navigation for phones) */}
      <MobileBottomBar />

      {/* Fullscreen Image Zoom & Viewer Modal */}
      {activeViewerImage && (
        <ImageViewerModal
          imageUrl={activeViewerImage.url}
          title={activeViewerImage.title}
          onClose={() => setActiveViewerImage(null)}
        />
      )}

      {/* Media Configuration Tool Modal */}
      <MediaConfigModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        bannerUrl={bannerUrl}
        setBannerUrl={setBannerUrl}
        nightImageUrl={nightImageUrl}
        setNightImageUrl={setNightImageUrl}
        timelineImageUrl={timelineImageUrl}
        setTimelineImageUrl={setTimelineImageUrl}
        videoId={videoId}
        setVideoId={setVideoId}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}

