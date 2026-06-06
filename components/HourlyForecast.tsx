"use client";
import React from 'react';
import { useState } from "react";
import Image from "next/image";
import WeatherIcon from "./WeatherIcon";
import { getDayName } from "../lib/utils";
import dropdownIcon from "../assets/images/icon-dropdown.svg";

interface HourlyForecastProps {
  data: {
    hourly: {
      time: string[];
      temperature_2m: number[];
      weather_code: number[];
    };
    daily: {
      time: string[];
    };
  };
  selectedDay: number;
  onDayChange: (index: number) => void;
  loading: boolean;
}

export default function HourlyForecast({
  data,
  selectedDay,
  onDayChange,
  loading,
}: HourlyForecastProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const hourlyData = data.hourly;
  const dailyData = data.daily;

  // Get hourly data for selected day (24 hours starting from selected day)
  const startHour = selectedDay * 24;
  const endHour = startHour + 24;

  const selectedDayHours = hourlyData.time
    .slice(startHour, endHour)
    .map((time, index) => {
      const hourNumber = new Date(time).getHours();
      
      // Handle 12-hour format display conversion
      const displayHour = hourNumber === 0 ? 12 : hourNumber > 12 ? hourNumber - 12 : hourNumber;
      const ampm = hourNumber < 12 ? "AM" : "PM";

      const temp = Math.round(hourlyData.temperature_2m[startHour + index]);
      const weatherCode = hourlyData.weather_code[startHour + index];

      return {
        time: `${displayHour} ${ampm}`,
        temp,
        weatherCode,
      };
    });

  const selectedDayName = getDayName(dailyData.time[selectedDay], selectedDay);

  return (
    <div className="glass-card rounded-xl p-6 h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Hourly forecast</h3>
        
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            <span className="text-white text-sm">{selectedDayName}</span>
            <Image 
              src={dropdownIcon} 
              alt="Toggle dropdown" 
              className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isDropdownOpen && (
            <>
              {/* Overlay backdrop to close dropdown when clicking anywhere outside */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-32 glass-card rounded-lg shadow-lg z-50 overflow-hidden backdrop-blur-md">
                <div className="py-1">
                  {dailyData.time.slice(0, 7).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        onDayChange(index);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-white/10 transition-colors ${
                        selectedDay === index ? "bg-white/20 font-medium" : ""
                      }`}
                    >
                      <div className="text-white text-sm">
                        {getDayName(date, index)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Hourly items list layout container */}
      <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 px-3 animate-pulse glass-card rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                <div className="h-4 w-14 bg-white/10 rounded"></div>
              </div>
              <div className="h-4 w-8 bg-white/10 rounded"></div>
            </div>
          ))
        ) : (
          selectedDayHours.map((hour, index) => (
            <div
              key={index}
              className="glass-card flex items-center justify-between py-2.5 hover:bg-white/10 rounded-lg px-3 transition-all duration-200 border border-white/5"
            >
              <div className="flex items-center space-x-4">
                <WeatherIcon code={hour.weatherCode} size="small" />
                <span className="text-white font-medium text-sm">{hour.time}</span>
              </div>
              <span className="text-white font-semibold">{hour.temp}°</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}



// // import React from 'react'

// // export default function HourlyForecast() {
// //   return (
// //     <div>
// //       HourlyForecast
// //     </div>
// //   )
// // }



// import React from 'react'
// import dropdown from "../assets/images/icon-dropdown.svg";
// import Image from "next/image";
// //import weatherIcon from "/assets/images/icon-sunny.webp";
// import WeatherIcon from "./WeatherIcon";
// import { getDayName } from "../lib/utils";
// import { useState } from "react";


// export default function HourlyForecast() {


//   return (
//     <div className="glass-card rounded-xl p-6 h-fit">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-xl font-semibold text-white">Hourly forecast</h3>

//         <div className="relative">
//           <button
//             className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
//           >
//             <span className="text-white">monday</span>
//             <Image src={dropdown} alt="" />
//           </button>

// {/*   
//             <div className="absolute right-0 mt-2 w-32 glass-card rounded-lg shadow-lg z-50">
//               <div className="py-2">
//                 <p className="1">1</p>
//                 <p className="2">2</p>
//                 <p className="3">3</p> */}
//                 {/* {dailyData.time.slice(0, 7).map((date, index) => ( */}
//                   {/* <button
//                     className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
//                   >
//                     <div className="text-white text-sm">
//                       wendaday 
//                 <p className="1">1</p>
//                 <p className="2">2</p>
//                 <p className="3">3</p> */}

//                       {/* {getDayName(date, index)} */}
//                     {/* </div>
//                   </button> */}
//                 {/* ))} */}
//               {/* </div>
//             </div> */}

//         </div>
//       </div>

//       <div className="space-y-3 max-h-96 overflow-y-auto">

// {/*   
//               <div

//                 className="flex items-center justify-between py-2 px-2 animate-pulse"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-6 h-6 glass-card rounded">9</div>
//                   <div className="h-4 w-12 glass-card rounded">8</div>
//                 </div>
//                 <div className="h-4 w-8 glass-card rounded">7</div>
//               </div> */}
            

//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />
//                   <span className="text-white font-medium"> 1 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>










//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 2 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>
//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 3 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>
//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 4 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>
//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 5 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>
//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 6 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>
//               <div
//                 className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image 
//                    src={WeatherIcon}
//                    alt="sunny"
//                    width={40}  // Explicit width
//                    height={40}
//                    className=" "
//                    />

//                   {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
//                   <span className="text-white font-medium"> 7 am</span>
//                 </div>
//                 <span className="text-white font-semibold">10°</span>
//               </div>















            
//       </div>
//     </div>
//   );
// }












































// "use client"; // Required for App Router client-side logic

// import { useState } from "react";
// import Image from "next/image"; // Optimized Next.js image component
// import WeatherIcon from "./WeatherIcon";
// import { getDayName } from "../lib/utils";
// import dropdown from "../assets/images/icon-dropdown.svg";

// // Explicit TypeScript structures matching Open-Meteo style payloads
// interface HourlyDataStructure {
//   time: string[];
//   temperature_2m: number[];
//   weather_code: number[];
// }

// interface DailyDataStructure {
//   time: string[];
// }

// interface WeatherDataPayload {
//   hourly: HourlyDataStructure;
//   daily: DailyDataStructure;
// }

// interface HourlyForecastProps {
//   data: WeatherDataPayload | null | undefined;
//   selectedDay: number;
//   onDayChange: (dayIndex: number) => void;
//   loading?: boolean;
// }

// export default function HourlyForecast({ 
//   data, 
//   selectedDay, 
//   onDayChange, 
//   loading 
// }: HourlyForecastProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
//   const hourlyData = data?.hourly;
//   const dailyData = data?.daily;

//   // Fallback loading or empty state to prevent crashes
//   if (loading || !hourlyData || !dailyData) {
//     return (
//       <div className="glass-card rounded-xl p-6 h-48 flex items-center justify-center">
//         <p className="text-white/60 animate-pulse">Loading hourly forecast...</p>
//       </div>
//     );
//   }

//   // Get hourly data for selected day (24 hours starting from selected day)
//   const startHour = selectedDay * 24;
//   const endHour = startHour + 24;
  
//   const selectedDayHours = (hourlyData.time || [])
//     .slice(startHour, endHour)
//     .map((time, index) => {
//       const hour = new Date(time).getUTCHours(); 
//       const temp = Math.round(hourlyData.temperature_2m[startHour + index]);
//       const weatherCode = hourlyData.weather_code[startHour + index];
      
//       return {
//         time: `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour} ${
//           hour < 12 ? "AM" : "PM"
//         }`,
//         temp,
//         weatherCode,
//       };
//     });

//   const selectedDayName = getDayName(dailyData.time[selectedDay], selectedDay);

//   const handleDaySelect = (index: number) => {
//     onDayChange(index);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="glass-card rounded-xl p-6 h-fit w-full backdrop-blur-md">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-xl font-semibold text-white">Hourly Forecast</h3>
        
//         {/* Day Selector Dropdown */}
//         <div className="relative z-10">
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
//           >
//             <span className="text-white text-sm font-medium">{selectedDayName}</span>
//             <Image 
//               src={dropdown} 
//               alt="Toggle dropdown" 
//               width={14} 
//               height={14} 
//               className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
//             />
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900/90 border border-white/10 p-1 shadow-xl backdrop-blur-lg">
//               {dailyData.time.map((time, index) => (
//                 <button
//                   key={time}
//                   onClick={() => handleDaySelect(index)}
//                   className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
//                     index === selectedDay 
//                       ? "bg-white/20 text-white font-semibold" 
//                       : "text-white/70 hover:bg-white/10 hover:text-white"
//                   }`}
//                 >
//                   {getDayName(time, index)}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Horizontal Scrollable Hourly Cards */}
//       <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
//         {selectedDayHours.map((hourItem, idx) => (
//           <div 
//             key={idx} 
//             className="flex flex-col items-center justify-between min-w-[70px] bg-white/5 border border-white/5 rounded-xl py-4 px-2 hover:bg-white/10 transition-all duration-200"
//           >
//             <span className="text-xs text-white/60 font-light">{hourItem.time}</span>
//             <div className="my-3 w-8 h-8 flex items-center justify-center">
//               <WeatherIcon code={hourItem.weatherCode} />
//             </div>
//             <span className="text-lg font-medium text-white">{hourItem.temp}°</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
