"use client";
import React from 'react';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import unitsIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import checkmarkIcon from "../assets/images/icon-checkmark.svg";

interface HeaderProps {
  units: string;
  onToggleUnits: () => void;
}

export default function Header({ units, onToggleUnits }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown instantly if user clicks outside of header navigation zone
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUnitSelection = (targetUnit: "metric" | "imperial") => {
    if (units !== targetUnit) {
      onToggleUnits();
    }
  };

  return (
    <header className="flex justify-between items-center mb-8 relative">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Weather now logo" className="w-40 sm:w-auto" priority />
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 text-sm font-medium text-white"
        >
          <Image src={unitsIcon} alt="" className="inline-block" />
          <span>Units</span>
          <Image
            src={dropdownIcon}
            alt=""
            className={`inline-block transform transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 glass-card rounded-lg shadow-xl z-50 text-sm backdrop-blur-md border border-white/10 overflow-hidden">
            <div className="p-4 space-y-4">
              {/* Quick Toggle Action Primary Button */}
              <button
                onClick={() => {
                  onToggleUnits();
                  setIsDropdownOpen(false);
                }}
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-3 rounded-lg transition-colors w-full text-center block text-xs"
              >
                Switch to {units === "metric" ? "Imperial" : "Metric"}
              </button>

              <div className="space-y-4 border-t border-white/5 pt-3">
                {/* Temperature Settings Block */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Temperature
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleUnitSelection("metric")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Celsius (&deg;C)</span>
                      {units === "metric" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                    <button
                      onClick={() => handleUnitSelection("imperial")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Fahrenheit (&deg;F)</span>
                      {units === "imperial" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Wind Metrics Settings Block */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Wind Speed
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleUnitSelection("metric")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>km/h</span>
                      {units === "metric" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                    <button
                      onClick={() => handleUnitSelection("imperial")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>mph</span>
                      {units === "imperial" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Precipitation Metrics Settings Block */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Precipitation
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleUnitSelection("metric")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "metric" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Millimeters (mm)</span>
                      {units === "metric" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                    <button
                      onClick={() => handleUnitSelection("imperial")}
                      className={`w-full flex items-center justify-between px-3 py-1.5 rounded text-left ${
                        units === "imperial" ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:bg-white/5"
                      } transition-colors`}
                    >
                      <span>Inches (in)</span>
                      {units === "imperial" && <Image src={checkmarkIcon} alt="Selected" className="size-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// "use client"



// import React from 'react'
// import { useState } from "react";
// import logo from "/assets/images/logo.svg";
// import unitsIcon from "/assets/images/icon-units.svg";
// import dropdown from "/assets/images/icon-dropdown.svg";
// import checkmark from "/assets/images/icon-checkmark.svg";
// import Image from 'next/image'; 



// interface HeaderProps {
//   units: "metric" | "imperial";
//   onToggleUnits: () => void;
// }

// export default function Header({ units, onToggleUnits }: HeaderProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);



//   return (
//     <>
//       <header className="flex justify-between items-center mb-8">
//       <div className="flex items-center space-x-2">
//         <Image src={logo} alt="Weather now!" className="w-40 sm:w-auto" />
//       </div>

//       <div className="relative">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="flex items-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
//         >
//           <Image src={unitsIcon} alt="" className="inline-block mr-2" />
//           Units
//           <Image
//             src={dropdown}
//             alt=""
            
//             className={`inline-block ml-2 ${
//               isDropdownOpen ? "rotate-180 transition" : ""
//             }`}
//           />
//         </button>

//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg shadow-lg z-50 text-sm">
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <button
//                   onClick={() => {
//                     onToggleUnits();
//                     setIsDropdownOpen(false);
//                   }}
//                   className="text-white glass-card p-2 rounded-lg transition-colors w-full"
//                 >
//                   Switch to {units === "metric" ? "Imperial" : "Metric"}
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <div className="text-white text-sm mb-2">Temperature</div>
//                   <div className="space-y-1">
//                     <div
                   
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Celcius (&deg;C)</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>

//                     <div
                    
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "imperial"
//                           ? "bg-white/20"
//                           : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Fahrenheit (&deg;F)</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-gray-300 text-sm mb-2">Wind Speed</div>
//                   <div className="space-y-1">
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">km/h</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>

//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "imperial"
//                           ? "bg-white/20"
//                           : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">mph</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-gray-300 text-sm mb-2">
//                     Precipitation
//                   </div>
//                   <div className="space-y-1">
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "metric" ? "bg-white/20" : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Millimeters (mm)</span>
//                       {units === "metric" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                     <div
//                       className={`flex items-center justify-between px-3 py-2 rounded ${
//                         units === "imperial"
//                           ? "bg-white/20"
//                           : "hover:bg-white/10"
//                       } transition-colors`}
//                     >
//                       <span className="text-white">Inches (in)</span>
//                       {units === "imperial" && (
//                         <Image
//                           src={checkmark}
//                           alt=""
//                           className="inline-block ml-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//     </>
//   )
// }
