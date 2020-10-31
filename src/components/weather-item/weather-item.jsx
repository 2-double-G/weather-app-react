import React from 'react';
import PropTypes from 'prop-types';

import './weather-item.css';

const WeatherItem = ({ id, city, country }) => (
    <div className="weather-item">
        <h3>{`${city}, ${country}`}</h3>
    </div>
);

WeatherItem.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
}

WeatherItem.defaultProps = {
    city: '',
    country: '',
}

export default WeatherItem;