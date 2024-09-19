import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 24.84,
        temp: 25.04,
        temp_min: 25.05,
        temp_max: 25.05,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Deepak</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}