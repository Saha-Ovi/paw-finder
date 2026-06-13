'use client'
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#070605] flex items-center justify-center p-6 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="relative mb-2">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-white/[0.02] leading-none select-none tracking-tight">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <svg 
              className="w-20 h-20 md:w-28 md:h-28 text-amber-500/20 mb-2 animate-bounce duration-1000" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 4s3-2 3-4c0-1.66-1.34-3-3-3zm-4.5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm9 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-9.75-4c.97 0 1.75-.78 1.75-1.75S7.97 4.5 7 4.5s-1.75.78-1.75 1.75S6.03 8 7 8zm10 0c.97 0 1.75-.78 1.75-1.75S17.97 4.5 17 4.5s-1.75.78-1.75 1.75S16.03 8 17 8z"/>
            </svg>
            <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-400 tracking-tight">
              Lost the scent?
            </span>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-200 mb-4">
            Looks like this page chased a squirrel right off the map.
          </h2>
          <p className="text-neutral-400 mb-10 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            The link might be broken, or the page has wandered away from the pack. 
            Don't worry — we will help you sniff your way back home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-500 to-orange-500 text-neutral-950 font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95 text-center shadow-lg shadow-orange-500/10"
            >
              Back to the Pack
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-6 opacity-20">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-white self-center" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white font-medium">Lost & Found</span>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-white self-center" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;