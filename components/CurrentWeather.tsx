"use client";

import { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import { formatDate } from "../lib/utils";

interface CurrentWeatherProps {
  data: {
    current: {
      temperature_2m: number;
      weather_code: number;
    };
  } | null;
  location: {
    name: string;
  };
}

export default function CurrentWeather({ data, location }: CurrentWeatherProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  // Fix hydration issues by generating the client-side date format on mount
  useEffect(() => {
    setFormattedDate(formatDate(new Date()));
  }, [data]); // Updates local date representation whenever data updates

  // Safe layout skeleton if data is missing or loading
  if (!data?.current) {
    return (
      <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden animate-pulse min-h-[268px] flex items-center justify-between border border-white/5">
        <div className="space-y-3">
          <div className="h-7 w-48 bg-white/10 rounded"></div>
          <div className="h-5 w-32 bg-white/10 rounded"></div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="h-20 w-24 bg-white/10 rounded"></div>
        </div>
      </div>
    );
  }

  const currentTemp = Math.round(data.current.temperature_2m);
  const weatherCode = data.current.weather_code;

  return (
    <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden shadow-xl border border-white/10">
      {/* Decorative background light gradient overlay for a glassmorphism feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row items-center justify-between relative z-10 gap-6 text-center sm:text-left">
        <div>
          <p className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
            {location.name}
          </p>
          <p className="text-blue-100 text-sm md:text-base opacity-80">
            {formattedDate || "Loading date..."}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <WeatherIcon code={weatherCode} size="large" />
          <div className="text-7xl md:text-8xl font-black text-white text-shadow italic tracking-tighter select-none">
            {currentTemp}&deg;
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import React from 'react';
// import Image from 'next/image';
// import weatherIcon from "/assets/images/icon-sunny.webp";
// import { formatDate } from "../lib/utils";

// // Define strict TypeScript structures for safety
// interface WeatherData {
//   current: {
//     temperature_2m?: number;
//     temperature?: number;
//     weather_code?: number;
//   };
// }

// interface LocationData {
//   name: string;
// }

// interface CurrentWeatherProps {
//   data: WeatherData;
//   location: LocationData;
// }

// export default function CurrentWeather({ data, location }: CurrentWeatherProps) {
//   // Prevent application crashes if data is missing
//   if (!data || !data.current || !location) {
//     return null;
//   }

//   // Support both Open-Meteo (temperature_2m) and alternative API formats
//   const rawTemp = data.current.temperature_2m ?? data.current.temperature ?? 0;
//   const currentTemp = Math.round(rawTemp);
//   const weatherCode = data.current.weather_code;

//   return (
//     <>
//       {/* weather-bg provides the blue background from global.css */}
//       <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden">
//         <div className="flex flex-col sm:flex-row items-center justify-between relative z-10">
          
//           <div className="mb-4">
//             <h2 className="text-2xl font-bold text-white mb-2">{location.name}</h2>
//             <p className="text-blue-100 text-base">{formatDate(new Date())}</p>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* 
//               Option A: Static Image (Your current setup)
//               Option B: To use dynamic icons based on code, uncomment the component below 
//             */}
//             <Image
//               src={weatherIcon}
//               alt={"Weather condition code: sunny"}
//               // alt={`Weather condition code: ${weatherCode}`}
//               width={200}
//               height={200}
//               className="object-contain"
//               priority // Loads above-the-fold weather image faster
//             />
            
//             {/* <WeatherIcon code={weatherCode} size="large" /> */}

//             <div className="ml-8 text-8xl font-bold text-white text-shadow italic">
//               10&deg;
//               {/* {currentTemp}&deg; */}
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }











// "use client"

// import React from 'react'
// import Image from 'next/image';
// import weatherIcon from "/assets/images/icon-sunny.webp";
// import { formatDate } from "../lib/utils";


// interface CurrentWeatherProps {
//   data: ;
//   location: ;
// }

// export default function CurrentWeather({ data, location }) {
  
//   // if (!data) return null;

//    //const currentTemp = Math.round(data.current.temperature_2m);
//    //const weatherCode = data.current.weather_code;


//   return (
//     <>
//     {/* weather-bg is calling the the blue background, saved in global.csss file */}
//       <div className="weather-bg rounded-2xl px-6 py-24 relative overflow-hidden">
//       <div className="flex flex-col sm:flex-row items-center justify-between relative z-10">
//         <div className="mb-4">
//           <p className="text-2xl font-bold text-white mb-2">{location.name} location</p>
//           <p className="text-blue-100 text-base">{formatDate(new Date())} Date</p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <Image 
//           src={weatherIcon}
//           alt="sunny"
//           width={200}  // Explicit width
//           height={200}
//           className=" "
//           />

//           {/* <WeatherIcon code={weatherCode} size="large" /> THIS IS IMAGE ABOVE*/}
//           <div className="ml-8 text-8xl font-bold text-white text-shadow italic">
//              10 &deg;
//             {/* {currentTemp}&deg; */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }












