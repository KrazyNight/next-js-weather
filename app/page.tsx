"use client";

import CurrentWeather from "@/components/CurrentWeather";
import DailyForecast from "@/components/DailyForecast";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import Metrics from "@/components/Metrics";
import Search from "@/components/Search";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchWeatherData, fetchLocationData } from "../lib/utils";
//import LoadingState from "./components/LoadingState";
import errorIcon from "../assets/images/icon-error.svg";
import retryIcon from "../assets/images/icon-retry.svg";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState({
    name: "Berlin, Germany",
    lat: 52.52,
    lon: 13.405,
  });
  const [units, setUnits] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setShowSearchResults(false);
    try {
      const locationData = await fetchLocationData(searchTerm);
      setSearchResults(locationData);
      if (locationData.length > 0) {
        setShowSearchResults(true);
      }
    } catch (err) {
      console.error("Error searching location", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = (locationData: any) => {
    const newLocation = {
      name: `${locationData.name}, ${locationData.country}`,
      lat: locationData.latitude,
      lon: locationData.longitude,
    };
    setLocation(newLocation);
    setShowSearchResults(false);
    setSearchResults([]);
  };

  const loadWeatherData = async () => {
    setApiError(false);
    if (!weatherData) {
      setInitialLoading(true);
    } else {
      setLoading(true);
    }
    try {
      const data = await fetchWeatherData(location.lat, location.lon, units);
      if (!data) throw new Error("No data returned");
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setApiError(true);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    loadWeatherData();
  }, [location, units]);

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  //   if (initialLoading) {
  //   return <LoadingState />;
  // }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Header units={units} onToggleUnits={toggleUnits} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-16 text-shadow">
            How's the sky looking today?
          </h1>
          <Search
            onSearch={handleSearch}
            loading={loading}
            searchResults={searchResults}
            showSearchResults={showSearchResults}
            onLocationSelect={handleLocationSelect}
            onCloseResults={() => setShowSearchResults(false)}
          />
        </div>

        {initialLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : apiError ? (
          <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-4 py-12">
            <Image src={errorIcon} alt="Error" className="block mx-auto size-10" />
            <h2 className="text-4xl">Something went wrong</h2>
            <p className="text-gray-400">
              We couldn't connect to the server (API error). Please try again in a few moments.
            </p>
            <button
              onClick={loadWeatherData}
              className="flex items-center justify-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <Image src={retryIcon} alt="Retry" className="mr-2 size-4" />
              <span>Retry</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <CurrentWeather data={weatherData} location={location} />
              <Metrics data={weatherData} units={units} loading={loading} />
              <DailyForecast
                data={weatherData}
                onDaySelect={setSelectedDay}
                selectedDay={selectedDay}
                loading={loading}
              />
            </div>
            <div className="lg:col-span-1">
              <HourlyForecast
                data={weatherData}
                selectedDay={selectedDay}
                onDayChange={setSelectedDay}
                loading={loading}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



// "use client"
// import CurrentWeather from "@/components/CurrentWeather";
// import DailyForecast from "@/components/DailyForecast";
// import Header from "@/components/Header";
// import HourlyForecast from "@/components/HourlyForecast";
// import Metrics from "@/components/Metrics";
// import Search from "@/components/Search";
// import Image from "next/image";

// import { useState, useEffect } from "react";
// import { fetchWeatherData, fetchLocationData } from "../lib/utils";
// import error from "../assets/images/icon-error.svg";
// import retry from "../assets/images/icon-retry.svg";



// export default function Home() {

//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState({
//     name: "Berlin, Germany",
//     lat: 52.52,
//     lon: 13.405,
//   });


//   const [units, setUnits] = useState("metric");
//   const [loading, setLoading] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);
//   const [selectedDay, setSelectedDay] = useState(0);
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false);

//   const handleSearch = async (searchTerm) => {
//     if (!searchTerm.trim()) return;

//     setLoading(true);
//     setShowSearchResults(false);

//     try {
//       const locationData = await fetchLocationData(searchTerm);
//       setSearchResults(locationData);

//       if (locationData.length > 0) {
//         setShowSearchResults(true);
//       }
//     } catch (error) {
//       console.error("Error searching location", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLocationSelect = (locationData) => {
//     const newLocation = {
//       name: `${locationData.name}, ${locationData.country}`,
//       lat: locationData.latitude,
//       lon: locationData.longitude,
//     };
//     setLocation(newLocation);
//     setShowSearchResults(false);
//     setSearchResults([]);
//   };

//   const loadWeatherData = async () => {
//     if (!weatherData) {
//       setInitialLoading(true);
//     } else {
//       setLoading(true);
//     }

//     try {
//       const data = await fetchWeatherData(location.lat, location.lon, units);
//       setWeatherData(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     } finally {
//       setLoading(false);
//       setInitialLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadWeatherData();
//   }, [location, units]);

//   const toggleUnits = () => {
//     setUnits(units === "metric" ? "imperial" : "metric");
//   };
















//   return (
//     <>

//     <div className="min-h-screen text-white">
//       <div className="container mx-auto px-4 py-6 max-w-7xl">
//         <Header units={units} onToggleUnits={toggleUnits} />

//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-5xl font-bold mb-16 text-shadow">
//             How's the sky looking today?
//           </h1>
//           <Search 
//           onSearch={handleSearch}
//             loading={loading}
//             searchResults={searchResults}
//             showSearchResults={showSearchResults}
//             onLocationSelect={handleLocationSelect}
//             onCloseResults={() => setShowSearchResults(false)}
          
//           />
//         </div>

  
// {weatherData ? (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 space-y-6">
//             <CurrentWeather data={weatherData} location={location} />
//             <Metrics data={weatherData} units={units} loading={loading} />
//             <DailyForecast
//                 data={weatherData}
//                 onDaySelect={setSelectedDay}
//                 selectedDay={selectedDay}
//                 loading={loading}
//             />
//           </div>

//           <div className="lg:col-span-1">
//             <HourlyForecast
//                 data={weatherData}
//                 selectedDay={selectedDay}
//                 onDayChange={setSelectedDay}
//                 loading={loading}
//             />
            
//           </div>
//         </div>
// ) : (
//   <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-4">
//             <Image src={error} alt="" className="block mx-auto size-10" />
//             <h2 className="text-4xl">Something went wrong</h2>
//             <p className="text-gray-400">
//               We couldn't connect to the server (API error). Please try again in
//               a few moments.
//             </p>

//             <button
//               onClick={fetchWeatherData}
//               className="flex items-center justify-center space-x-2 glass-card px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
//             >
//               <img src={retry} alt="" className="mr-2 size-4" />
//               Retry
//             </button>
//           </div>
// )}
      
//       </div>
//     </div>


//     </>
//   );
// }













// "use client"
// import CurrentWeather from "@/components/CurrentWeather";
// import DailyForecast from "@/components/DailyForecast";
// import Header from "@/components/Header";
// import HourlyForecast from "@/components/HourlyForecast";
// import Metrics from "@/components/Metrics";
// import Search from "@/components/Search";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { fetchWeatherData, fetchLocationData } from "../lib/utils";
// //import errorIcon from "./assets/images/icon-error.svg";
// //import retryIcon from "./assets/images/icon-retry.svg";

// export default function Home() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState({
//     name: "Berlin, Germany",
//     lat: 52.52,
//     lon: 13.405,
//   });

//   const [units, setUnits] = useState("metric");
//   const [loading, setLoading] = useState(false);
//   const [initialLoading, setInitialLoading] = useState(true);
//   const [fetchError, setFetchError] = useState(false);
//   const [selectedDay, setSelectedDay] = useState(0);
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false);

//   // Search autocomplete handler
//   const handleSearch = async (searchTerm) => {
//     if (!searchTerm.trim()) return;
//     setLoading(true);
//     setFetchError(false);
//     try {
//       const locationData = await fetchLocationData(searchTerm);
//       setSearchResults(locationData || []);
//       setShowSearchResults(true);
//     } catch (err) {
//       console.error("Error searching location", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Location selection handler
//   const handleLocationSelect = (locationData) => {
//     const newLocation = {
//       name: `${locationData.name}${locationData.country ? `, ${locationData.country}` : ''}`,
//       lat: locationData.latitude || locationData.lat,
//       lon: locationData.longitude || locationData.lon,
//     };
//     setLocation(newLocation);
//     setShowSearchResults(false);
//     setSearchResults([]);
//   };

//   // Fetch weather when location or units change
//   useEffect(() => {
//     const loadWeatherData = async () => {
//       setLoading(true);
//       setFetchError(false);
//       try {
//         const data = await fetchWeatherData(location.lat, location.lon, units);
//         setWeatherData(data);
//       } catch (err) {
//         console.error("Error fetching weather data", err);
//         setFetchError(true);
//       } finally {
//         setLoading(false);
//         setInitialLoading(false);
//       }
//     };

//     loadWeatherData();
//   }, [location, units]);

//   // Initial skeleton loader state
//   if (initialLoading) {
//     return (
//       <div className="flex h-screen items-center justify-center bg-slate-900 text-white">
//         <p className="text-xl animate-pulse">Loading weather dashboard...</p>
//       </div>
//     );
//   }

//   // Error state layout
//   if (fetchError) {
//     return (
//       <div className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-900 text-white p-4 text-center">
//         <Image src={errorIcon} alt="Error" width={64} height={64} className="opacity-80" />
//         <h2 className="text-2xl font-bold">Failed to load weather data</h2>
//         <p className="text-slate-400">Please check your network connection or API configuration.</p>
//         <button 
//           onClick={() => setLocation({ ...location })}
//           className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500 transition"
//         >
//           <Image src={retryIcon} alt="Retry" width={16} height={16} />
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-50 p-4 md:p-8">
//       <div className="mx-auto max-w-7xl space-y-6">
        
//         {/* Top Header & Search Area */}
//         <Header units={units} setUnits={setUnits} />
        
//         <div className="relative z-50 max-w-md">
//           <Search onSearch={handleSearch} />
//           {showSearchResults && searchResults.length > 0 && (
//             <ul className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-xl">
//               {searchResults.map((result, idx) => (
//                 <li 
//                   key={idx}
//                   onClick={() => handleLocationSelect(result)}
//                   className="cursor-pointer rounded-lg px-4 py-2.5 hover:bg-slate-800 transition text-sm"
//                 >
//                   {result.name} {result.country && `, ${result.country}`}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Dashboard Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Column 1: Current Weather Status */}
//           <div className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
//             <CurrentWeather data={weatherData} locationName={location.name} units={units} />
//           </div>

//           {/* Column 2 & 3: Detailed Forecast Data */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
//               <HourlyForecast data={weatherData} selectedDay={selectedDay} units={units} />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
//                 <DailyForecast data={weatherData} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
//               </div>
//               <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
//                 <Metrics data={weatherData} selectedDay={selectedDay} units={units} />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
