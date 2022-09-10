import './App.css';
import Search from './components/Search';
import DateAndTime from './components/DateAndTime';
import CityAndWeather from './components/CityAndWeather';
import FeelsAndTemperature from './components/FeelsAndTemperature';

function App() {
  return (
    <div className="App">
      <h1>WEATHERLY</h1>
      <div className="links">
        <span>Vancouver</span>
        <span>Hamilton</span>
        <span>Toronto</span>
        <span>Kingston</span>
        <span>Ottawa</span>
      </div>
      <div className="search-and-city">
        <div>
          <Search />
          <DateAndTime />
          </div>
        <div className="city-and-weather">
          <CityAndWeather />
        </div>
      </div>
      <div className="feel-and-temperature">
    <FeelsAndTemperature />
      </div>
      <div className="sun-times">
        <span>rise</span>
        <span>set</span>
      </div>
      <div className="hourly-forecast"></div>
      <div className="weekly-forecast"></div>
    </div>
  );
}

export default App;
