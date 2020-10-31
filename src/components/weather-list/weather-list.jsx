import React from 'react';
import PropTypes from 'prop-types';

import WeatherItem from '../../components/weather-item/weather-item';

import './weather-list.css';



const WeatherList = ({ citiesList }) => (
    <ul className="weather-list">
        {citiesList.map(({ id, city, country }) => (
            <WeatherItem city={city} country={country} id={id} key={id}/>
        ))}
    </ul>
);

WeatherList.propTypes = {
    citiesList: PropTypes.array,
}
  
WeatherList.defaultProps = {
    citiesList: [],
}

export default WeatherList;