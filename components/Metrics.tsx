import React from 'react'


export default function Metrics() {
  const metrics = [
    {
      label: "Feels Like",
      value: 10 ,
      unit:   "&deg;"  ,
    },
    {
      label: "Humidity",
      value: 0 ,
      unit: "%",
    },
    {
      label: "Wind",
      value: 0 ,
      unit: "km/h" ,
    },
    {
      label: "Precipitation",
      value: 0 ,
      unit: "mm" ,
    },
  ];

  // if (!data)
  //   return (
  //     <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
  //       {metrics.map((metric, index) => (
  //         <div
  //           key={index}
  //           className="glass-card rounded-xl rounde-xl p-4 hover:bg-white/20 transition-all duration-200"
  //         >
  //           <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
  //           <div className="text-white">__</div>
  //         </div>
  //       ))}
  //     </div>
  //   );

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="glass-card rounded-xl rounde-xl p-4 hover:bg-white/20 transition-all duration-200"
        >
          <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
          <div className="text-2xl font-bold text-white">
            {metric.value}
            {metric.unit && (
              <span className="text-lg text-gray-300 ml-1">{metric.unit}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}