// import React from 'react'

// export default function HourlyForecast() {
//   return (
//     <div>
//       HourlyForecast
//     </div>
//   )
// }




import dropdown from "../assets/images/icon-dropdown.svg";
import Image from "next/image";
import weatherIcon from "/assets/images/icon-sunny.webp";

export default function HourlyForecast() {


  return (
    <div className="glass-card rounded-xl p-6 h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Hourly forecast</h3>

        <div className="relative">
          <button
            className="flex items-center space-x-2 glass-card px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
          >
            <span className="text-white">monday</span>
            <img src={dropdown} alt="" />
          </button>

{/*   
            <div className="absolute right-0 mt-2 w-32 glass-card rounded-lg shadow-lg z-50">
              <div className="py-2">
                <p className="1">1</p>
                <p className="2">2</p>
                <p className="3">3</p> */}
                {/* {dailyData.time.slice(0, 7).map((date, index) => ( */}
                  {/* <button
                    className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-white text-sm">
                      wendaday 
                <p className="1">1</p>
                <p className="2">2</p>
                <p className="3">3</p> */}

                      {/* {getDayName(date, index)} */}
                    {/* </div>
                  </button> */}
                {/* ))} */}
              {/* </div>
            </div> */}

        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">

{/*   
              <div

                className="flex items-center justify-between py-2 px-2 animate-pulse"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 glass-card rounded">9</div>
                  <div className="h-4 w-12 glass-card rounded">8</div>
                </div>
                <div className="h-4 w-8 glass-card rounded">7</div>
              </div> */}
            

              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />
                  <span className="text-white font-medium"> 1 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>










              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 2 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>
              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 3 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>
              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 4 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>
              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 5 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>
              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 6 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>
              <div
                className="glass-card flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Image 
                   src={weatherIcon}
                   alt="sunny"
                   width={40}  // Explicit width
                   height={40}
                   className=" "
                   />

                  {/* <WeatherIcon code={hour.weatherCode} size="small" /> */}
                  <span className="text-white font-medium"> 7 am</span>
                </div>
                <span className="text-white font-semibold">10°</span>
              </div>















            
      </div>
    </div>
  );
}