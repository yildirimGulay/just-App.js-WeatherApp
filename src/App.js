import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // use the api
  const [weather, setWeather] = useState([]);

  const [term, setTerm] = useState('');

  const [query, setQuery] = useState('London');

  //Weather Show
  const [icon, setIcon] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [main, setMain] = useState('');

  //form
  const handleClick = (e) => {
    e.preventDefault();

    console.log('clicklendi');

    setQuery(term);
  };
  console.log(`form term`, term);
  console.log();

  //Api
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${query}&mode=json&units=metric&APPID=cb370b1fdbe3b6b0965324cccfeb99e3`
        );
        setWeather(response.data);
        setIcon(response.data.weather[0].icon);
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setMain(response.data.weather[0].main);

        console.log('hooksearchterm', query);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  console.log('app weather', weather);

  return (
    <>
      <div className="App">
        <div className="card">
          <h2 className="title">
            {' '}
            <i className="fa fa-cloud"></i>Weather App
          </h2>

          <form onSubmit={handleClick} className="search-form">
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Enter your cityname"
            />
            <button type="button" onClick={handleClick}>
              {' '}
              Search{' '}
            </button>
          </form>
          <h2>{main}</h2>
          <img
            style={{ width: 150, height: 150 }}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
          <h2>{Math.floor(temp)}&deg;</h2>
          <h2>
            {' '}
            {weather.name}, {country}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
