import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9a01708947300e64b560668a7c6a2039";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
        
    };

    let handleChange = (evnt) =>{
        setCity(evnt.target.value);
    };

    let handleSubmit = async(evnt) =>{
        try{
            evnt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };

   return (
    <div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color: "red"}}>No such place exists</p>}
        </form>
    </div>
   );
}