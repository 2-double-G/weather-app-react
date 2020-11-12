import React from 'react';
import PropTypes from 'prop-types';

import './today.css';

const Today = ({ temp, feelsLike, tempMax, tempMin, pressure, humidity }) => (
    <div className="today">
        <div className="today-inner">
            <span className="now">{Math.round(temp)}<span>°C</span></span>
            <div className="today__item">
                <span>{`Feels like: ${Math.round(feelsLike)} °C`}</span>
                <span>{`Max: ${Math.round(tempMax)} °C`}</span>
                <span>{`Min: ${Math.round(tempMin)} °C`}</span>
            </div>
            <div className="today__item">
                <span>{`Pressure: ${pressure} mbar`}</span>
                <span>{`Humidity: ${humidity} %`}</span>
            </div>
        </div>
    </div>
);

Today.propTypes = {
    temp: PropTypes.number,
    feelsLike: PropTypes.number,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
}

Today.defaultProps = {
    temp: 0,
    feelsLike: 0,
    tempMax: 0,
    tempMin: 0,
    pressure: 0,
    humidity: 0,
}

export default Today;
