"use client";
import React from 'react';
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import searchIcon from "../assets/images/icon-search.svg";

export default function LoadingState() {
  return (
    <div className="min-h-screen text-white select-none">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        
        {/* Header Block Placeholder */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <Image src={logo} alt="Weather now" className="w-40 sm:w-auto" priority />
          </div>
          <button disabled className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg opacity-60 cursor-not-allowed">
            <Image src={unitsIcon} alt="" className="inline-block" />
            <span className="text-sm">Units</span>
            <Image src={dropdownIcon} alt="" className="inline-block" />
          </button>
        </header>

        {/* Title & Search Skeleton Wrapper */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-16 text-shadow">
            How's the sky looking today?
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto opacity-70">
            <div className="relative flex-1">
              <Image 
                src={searchIcon} 
                alt="" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50 z-10" 
              />
              <input 
                type="text" 
                placeholder="Search for a place..." 
                className="w-full pl-10 pr-4 py-3 glass-card rounded-lg text-white/50 placeholder-neutral-400 focus:outline-none cursor-not-allowed" 
                disabled 
              />
            </div>
            <button 
              type="button" 
              disabled 
              className="px-6 py-3 bg-neutral-700 text-neutral-400 cursor-not-allowed rounded-lg font-medium transition-all duration-200"
            >
              Search
            </button>
          </div>
        </div>

        {/* Layout Column Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Current Weather Layout Component Loading Box */}
            <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden min-h-[268px] flex items-center justify-between border border-white/5 animate-pulse">
              <div className="space-y-3">
                <div className="h-7 w-48 bg-white/10 rounded"></div>
                <div className="h-5 w-32 bg-white/10 rounded"></div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="h-20 w-24 bg-white/10 rounded"></div>
              </div>
            </div>

            {/* 2. Weather Metrics Cards Loading Blocks */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["Feels Like", "Humidity", "Wind", "Precipitation"].map((label, index) => (
                <div key={index} className="glass-card rounded-xl p-4 border border-white/5 animate-pulse">
                  <div className="text-gray-400 text-sm font-medium mb-2">{label}</div>
                  <div className="h-7 w-12 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>

            {/* 3. Daily Forecast Board Loading Box */}
            <div className="glass-card rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-white">Daily forecast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="glass-card rounded-lg p-4 text-center animate-pulse border border-white/5">
                    <div className="h-4 bg-white/10 rounded mb-3 w-3/4 mx-auto"></div>
                    <div className="h-8 bg-white/10 rounded mb-3 w-1/2 mx-auto"></div>
                    <div className="space-y-1.5">
                      <div className="h-4 bg-white/10 rounded w-5/6 mx-auto"></div>
                      <div className="h-3 bg-white/10 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4. Side Column: Hourly Forecast List Loading Box */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 h-fit border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Hourly forecast</h3>
                <div className="glass-card px-3 py-2 rounded-lg opacity-50">
                  <div className="h-4 w-12 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="flex items-center justify-between py-2.5 px-3 animate-pulse glass-card rounded-lg border border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                      <div className="h-4 w-14 bg-white/10 rounded"></div>
                    </div>
                    <div className="h-4 w-8 bg-white/10 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
