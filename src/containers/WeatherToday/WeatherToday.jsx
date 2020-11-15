import React from 'react';

// import classes from './weather-info.css';

// import WeatherInfoBlock from '../template/template'
import Today from '../../components/today/today';

const WeatherToday = (props) => {


    return (
        <div className="weather-info">
            <Today  
                temp={props.main.temp} 
                feelsLike={props.main.feels_like} 
                tempMax={props.main.temp_max} 
                tempMin={props.main.temp_min} 
                pressure={props.main.pressure} 
                humidity={props.main.humidity} 
            />
        </div>
    )
}

export default WeatherToday;