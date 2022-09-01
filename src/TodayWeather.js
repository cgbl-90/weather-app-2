import "./App.css";
import "./TodayWeather.css";

export default function WeatherCard() {
  return (
    <div className="card">
      <h3 id="wTime" class="smallText">
        Thursday, 17:59
      </h3>
      <h1 id="cityLabel">Budva</h1>
      <h1 id="countryLabel">ME</h1>
      <h2 id="cityLabel">30</h2>
      <h2 id="tGrad">C</h2>
      <h3 id="feelsLike">feels like 35</h3>
    </div>
  );
}
