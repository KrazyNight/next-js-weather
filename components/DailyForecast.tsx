// import React from 'react'

// export default function DailyForecast() {
//   return (
//     <div>
//       DailyForecast
//     </div>
//   )
// }


import React from 'react';
import Image from 'next/image';
import weatherIcon from "/assets/images/icon-sunny.webp";



export default function DailyForecast() {


  // if (!data)
  //   return (
  //     <div className="rounded-xl">
  //       <h3 className="text-xl font-semibold mb-4 text-white">
  //         Daily forecast
  //       </h3>

  //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
  //         <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //           <button
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //         {/* {dailyData.time.slice(0, 7).map((_, index) => (
  //           <button
  //             key={index}
  //             className="glass-card rounded-lg px-4 py-20 text-center hover:bg-white/20 transition-all duration-200"
  //           ></button>
  //         ))} */}
  //       </div>
  //     </div>
  //   );

  return (
    <>
    <div className="rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-white">Daily forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">

            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>




            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Tue 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>
            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>
            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>
            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>
            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>
            <button
              className="glass-card rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200 ">
              <div className="text-sm text-gray-300 mb-2">
                Mon 
              </div>

              <div className="mb-3">
                 <Image 
                  src={weatherIcon}
                  alt="sunny"
                  width={200}  // Explicit width
                  height={200}
                  className=" "
                  />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">
                  20&deg;
                </div>
                <div className="text-sm">10&deg;</div>
              </div>
            </button>

      </div>
    </div>
    </>
  );
}