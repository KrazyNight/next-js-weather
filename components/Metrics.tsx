"use client";
import React from 'react'
import {
  getTemperatureUnit,
  getWindSpeedUnit,
  getPrecipitationUnit,
} from "../lib/utils";

interface MetricsProps {
  data: {
    current: {
      apparent_temperature: number;
      relative_humidity_2m: number;
      wind_speed_10m: number;
      precipitation: number;
    };
  } | null;
  units: string;
  loading: boolean;
}






export default function Metrics({ data, units, loading }: MetricsProps) {
  // 1. Safe guard check: Build mock/skeleton array if data hasn't arrived yet
  const metricsData = data?.current
    ? [
        {
          label: "Feels Like",
          value: `${Math.round(data.current.apparent_temperature)}`,
          unit: getTemperatureUnit(units),
        },
        {
          label: "Humidity",
          value: `${data.current.relative_humidity_2m}%`,
          unit: "",
        },
        {
          label: "Wind",
          value: `${Math.round(data.current.wind_speed_10m)}`,
          unit: getWindSpeedUnit(units),
        },
        {
          label: "Precipitation",
          value: `${data.current.precipitation}`,
          unit: getPrecipitationUnit(units),
        },
      ]
    : [
        { label: "Feels Like", value: "—", unit: "" },
        { label: "Humidity", value: "—", unit: "" },
        { label: "Wind", value: "—", unit: "" },
        { label: "Precipitation", value: "—", unit: "" },
      ];

  // 2. Loading layout state mapping (Using a smooth pulsing animation)
  if (loading || !data) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-4 animate-pulse border border-white/5"
          >
            <div className="h-4 w-16 bg-white/10 rounded mb-2"></div>
            <div className="h-7 w-12 bg-white/10 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  // 3. Render loaded weather statistics dashboard panels
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metricsData.map((metric, index) => (
        <div
          key={index}
          className="glass-card rounded-xl p-4 hover:bg-white/10 transition-all duration-200 border border-white/5"
        >
          <div className="text-gray-400 text-sm font-medium mb-1">
            {metric.label}
          </div>
          <div className="text-2xl font-bold text-white tracking-tight">
            {metric.value}
            {metric.unit && (
              <span className="text-base font-normal text-gray-400 ml-1">
                {metric.unit}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


// import React from 'react'


// export default function Metrics() {
//   const metrics = [
//     {
//       label: "Feels Like",
//       value: 10 ,
//       unit:   "&deg;"  ,
//     },
//     {
//       label: "Humidity",
//       value: 0 ,
//       unit: "%",
//     },
//     {
//       label: "Wind",
//       value: 0 ,
//       unit: "km/h" ,
//     },
//     {
//       label: "Precipitation",
//       value: 0 ,
//       unit: "mm" ,
//     },
//   ];

//   // if (!data)
//   //   return (
//   //     <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//   //       {metrics.map((metric, index) => (
//   //         <div
//   //           key={index}
//   //           className="glass-card rounded-xl rounde-xl p-4 hover:bg-white/20 transition-all duration-200"
//   //         >
//   //           <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
//   //           <div className="text-white">__</div>
//   //         </div>
//   //       ))}
//   //     </div>
//   //   );

//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//       {metrics.map((metric, index) => (
//         <div
//           key={index}
//           className="glass-card rounded-xl rounde-xl p-4 hover:bg-white/20 transition-all duration-200"
//         >
//           <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
//           <div className="text-2xl font-bold text-white">
//             {metric.value}
//             {metric.unit && (
//               <span className="text-lg text-gray-300 ml-1">{metric.unit}</span>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }