import "./App.css";
import "./WeatherDetails.css";

export default function DetailsCard() {
  return (
    <div className="card">
      <h3 id="wDescription">broken clouds</h3>
      <h3 id="wHumidity">humidity — 69 %</h3>
      <h3 id="wPressure">pressure — 1014 mb</h3>
      <h3 id="wWind">wind — 1.34 km/h</h3>
    </div>
  );
}
