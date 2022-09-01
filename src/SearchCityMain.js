import "./App.css";
import "./SearchCityMain.css";

export default function SearchCard() {
  return (
    <div className="searchCard">
      <button id="bLocate" class="btn">
        L
      </button>
      <input id="cSearch" placeholder="city" />
      <button id="bSearch" class="btn">
        SEARCH
      </button>
    </div>
  );
}
