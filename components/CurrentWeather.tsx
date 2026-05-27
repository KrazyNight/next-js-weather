"use client"
import React from 'react'
import Image from 'next/image';
import weatherIcon from "/assets/images/icon-sunny.webp";

export default function CurrentWeather() {
  return (
    <>
    {/* weather-bg is calling the the blue background, saved in global.csss file */}
      <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between relative z-10">
        <div className="mb-4">
          <p className="text-2xl font-bold text-white mb-2">location</p>
          <p className="text-blue-100 text-base">Date</p>
        </div>

        <div className="flex items-center space-x-4">
          <Image 
          src={weatherIcon}
          alt="sunny"
          width={200}  // Explicit width
          height={200}
          className=" "
          />

          {/* <WeatherIcon code={weatherCode} size="large" /> */}
          <div className="ml-8 text-8xl font-bold text-white text-shadow italic">
            10&deg;
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
