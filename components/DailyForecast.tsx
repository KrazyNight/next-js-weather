"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import WeatherIcon from "./WeatherIcon";
import { getDayName } from "../lib/utils";

// Define strict types for the weather API data structure
interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

interface WeatherResponse {
  daily: DailyData;
  [key: string]: unknown; // Allows for other top-level properties like latitude, longitude, etc.
}

interface DailyForecastProps {
  data: WeatherResponse | null | undefined;
}

export default function DailyForecast({ data }: DailyForecastProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get active day from URL query string, default to day 0
  const selectedDay = parseInt(searchParams?.get("day") || "0", 10);

  // Loading skeleton / empty state fallback
  if (!data || !data.daily) {
    return (
      <div className="rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-white">Daily forecast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="glass-card rounded-lg px-4 py-20 text-center animate-pulse bg-white/5"
            />
          ))}
        </div>
      </div>
    );
  }

  const dailyData = data.daily;

  const handleDaySelect = (index: number) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("day", index.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-white">Daily forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {dailyData.time.slice(0, 7).map((date, index: number) => {
          const isSelected = selectedDay === index;
          const dayName = getDayName(date, index);
          const maxTemp = Math.round(dailyData.temperature_2m_max[index]);
          const minTemp = Math.round(dailyData.temperature_2m_min[index]);
          const weatherCode = dailyData.weather_code[index];

          return (
            <button
              key={date}
              onClick={() => handleDaySelect(index)}
              className={`glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ${
                isSelected ? "bg-white/20 ring-2 ring-blue-400" : ""
              }`}
            >
              <div className="text-sm text-gray-300 mb-2">{dayName}</div>
              <div className="flex justify-center mb-3">
                <WeatherIcon code={weatherCode} size="medium" />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white font-semibold text-sm">
                  {maxTemp}&deg;
                </span>
                <span className="text-gray-400 text-sm">{minTemp}&deg;</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}





// // import React from 'react'

// // export default function DailyForecast() {
// //   return (
// //     <div>
// //       DailyForecast
// //     </div>
// //   )
// // }






// import React from 'react';
// import Image from 'next/image';
// import weatherIcon from "/assets/images/icon-sunny.webp";
// import { getDayName } from "../lib/utils";



// export default function DailyForecast() {


//   return (
//     <>
//     <div className="rounded-xl">
//       <h3 className="text-xl font-semibold mb-4 text-white">Daily forecast</h3>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">

//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>




//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Tue 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>
//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>
//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>
//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>
//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>
//             <button
//               className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
//               <div className="text-sm text-gray-300 mb-2">
//                 Mon 
//               </div>

//               <div className="mb-3">
//                  <Image 
//                   src={weatherIcon}
//                   alt="sunny"
//                   width={200}  // Explicit width
//                   height={200}
//                   className=" "
//                   />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="text-white font-semibold text-sm">
//                   20&deg;
//                 </div>
//                 <div className="text-sm">10&deg;</div>
//               </div>
//             </button>

//       </div>
//     </div>
//     </>
//   );
// }