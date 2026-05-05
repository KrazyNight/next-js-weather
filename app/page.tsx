import CurrentWeather from "@/components/CurrentWeather";
import DailyForecast from "@/components/DailyForecast";
import Header from "@/components/Header";
import HourlyForecast from "@/components/HourlyForecast";
import Metrics from "@/components/Metrics";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Header />

    <Search />
    <CurrentWeather />
    <Metrics />
    <DailyForecast />
    <HourlyForecast /> */}

    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Header />

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-16 text-shadow">
            How's the sky looking today?
          </h1>
          <Search
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CurrentWeather  />
            <Metrics />
            <DailyForecast />
          </div>
          <div className="lg:col-span-1">
            <HourlyForecast />
          </div>
        </div>
      
      </div>
    </div>


    </>
  );
}
