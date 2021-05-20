import React, { useState, useEffect } from "react";
import { searchCity } from "./apiCalls";
import snow from "./../images/snow.jpg";
import sleet from "./../images/sleet.jpg";
import tunder from "./../images/tunder.jpg";
import clear from "./../images/clear.jpg";
import lightcloud from "./../images/light cloud.png";
import hail from "./../images/hail.jpg";
import lightrain from "./../images/light rain.jpg";
import heavyrain from "./../images/heavy rain.jpg";
import heavyCloud from "./../images/heavy cloud.jpg";
import showers from "./../images/showers.jpg";

import "./Wheather.css";

export default function WheatherDetail({ match }) {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await searchCity(match.params.id);
      setDetail(data.consolidated_weather);
    };
    load();
  }, []);

  return (
    <div className="wheather">
      {detail.map((det, index) => (
        <div key={index} className="Card">
          <h4>{det.weather_state_name}</h4>
          {det.weather_state_abbr === "lr" && (
            <img src={lightrain} className="ImageCard" />
          )}
          {det.weather_state_abbr === "hr" && (
            <img src={heavyrain} className="ImageCard" />
          )}
          {det.weather_state_abbr === "hc" && (
            <img src={heavyCloud} className="ImageCard" />
          )}
          {det.weather_state_abbr === "sn" && (
            <img src={snow} className="ImageCard" />
          )}
          {det.weather_state_abbr === "sl" && (
            <img src={sleet} className="ImageCard" />
          )}
          {det.weather_state_abbr === "t" && (
            <img src={tunder} className="ImageCard" />
          )}
          {det.weather_state_abbr === "h" && (
            <img src={hail} className="ImageCard" />
          )}
          {det.weather_state_abbr === "s" && (
            <img src={showers} className="ImageCard" />
          )}
          {det.weather_state_abbr === "lc" && (
            <img src={lightcloud} className="ImageCard" />
          )}
          {det.weather_state_abbr === "c" && (
            <img src={clear} className="ImageCard" />
          )}
          <h1>{det.applicable_date}</h1>
          <h4> maximum temperature:{det.max_temp.toFixed(2)}</h4>
          <h1>{det.min_temp.toFixed(2)}</h1>
        </div>
      ))}
    </div>
  );
}
