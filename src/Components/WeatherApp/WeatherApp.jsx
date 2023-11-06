import React, { useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assests/search.png";
import clear_icon from "../Assests/clear.png";
import drizzle_icon from "../Assests/drizzle.png";
import humidity_icon from "../Assests/humidity.png";
import cloud_icon from "../Assests/cloud.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import wind_icon from "../Assests/wind.png";

const WeatherApp = () => {
  let api = "ade43ab38aae0682aa2547765f0c4bbb";
  const [icon,seticon]=useState(cloud_icon)
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;
    let response = await fetch(url);
    let data = await response.json();

    const wind = document.getElementsByClassName("wind-rate");
    const humidity = document.getElementsByClassName("humidity-percent");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed +" km/hr" ;
    temperature[0].innerHTML = data.main.temp + "°c";
    location[0].innerHTML = data.name;
if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
  seticon(clear_icon);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
  seticon(cloud_icon);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
  seticon(drizzle_icon);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
  seticon(rain_icon);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
  seticon(drizzle_icon);
}
else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n"){
  seticon(rain_icon);
}
else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n"){
  seticon(snow_icon);
}
else{
  seticon(clear_icon);
}
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
