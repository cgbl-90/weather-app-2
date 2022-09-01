import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import ForecastPerDay from "./ForecastPerDay";
import ForecastPerHour from "./ForecastPerHour";
import SearchCard from "./SearchCityMain";
import WeatherCard from "./TodayWeather";
import DetailsCard from "./WeatherDetails";
import InitialMode from "./ModeDarkLight";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
        <InitialMode />
        <WeatherCard />
        <DetailsCard />
        <SearchCard />
      </div>
      <ForecastPerHour />
      <ForecastPerDay />
    </div>
  </StrictMode>
);
