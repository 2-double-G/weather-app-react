import React from 'react';

import './weather-info.css';

import WeatherInfoBlock from '../template/template'
import Today from '../today/today'

const WeatherInfo = ({ city, country, condition, clouds, main }) => (
    <div className="weather-info">
        <WeatherInfoBlock title="City" value={city}/>
        <WeatherInfoBlock title="Country" value={country}/>
        <WeatherInfoBlock title="Condition" value={condition}/>
        <WeatherInfoBlock title="Clouds" value={`${clouds}%`}/>
        <Today  
            temp={main.temp} 
            feelsLike={main.feels_like} 
            tempMax={main.temp_max} 
            tempMin={main.temp_min} 
            pressure={main.pressure} 
            humidity={main.humidity} 
        />
    </div>
);

export default WeatherInfo;