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
    <Header />

    <Search />
    <CurrentWeather />
    <Metrics />
    <DailyForecast />
    <HourlyForecast />
    </>
  );
}
