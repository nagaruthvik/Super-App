import { useState, useEffect } from 'react';
import styles from '../style/weather.module.css';
const Weather = () => {
  const [data, setData] = useState({
    localtime : "",
    temp_c: "",
    condition: "",
    icon: "",
    pressure_mb: "",
    humidity: "",
    wind_kph: ""
  });

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?key=bf9f4c4526984c68ae345810251101&q=vijayawada&aqi=no"
        );
        const weatherData = await response.json();


        setData({
          localtime: weatherData.location.localtime || "",
          temp_c: weatherData.current.temp_c || "",
          condition: weatherData.current.condition?.text || "",
          icon: weatherData.current.condition?.icon || "",
          pressure_mb: weatherData.current.pressure_mb || "",
          humidity: weatherData.current.humidity || "",
          wind_kph : weatherData.current.wind_kph
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, []);

  return (
    <div className={styles.mainwe}>
      <div className={styles.time}>
        <h1>{data.localtime}</h1>
      </div>
      <div className={styles.weather}>
        <div className={styles.group1}>
          <img className={styles.wimg} src={data.icon} alt="Weather Icon" />
          <p>{data.condition}</p>
        </div>
        <div className={styles.group2}>
          <p className={styles.temp}>{data.temp_c}°C</p>
          <p>{data.pressure_mb} mb</p>
        </div>
        <div className={styles.group3}>    
          <p>{data.wind_kph}km/h</p>   
          <p className={styles.small}>Humidiy</p>
          <p >{data.humidity}%</p>
          <p className={styles.small}>Humidiy</p>


        </div>
  



      </div>
      
    </div>
  );
};

export default Weather;
