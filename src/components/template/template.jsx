import React from 'react';
import PropTypes from 'prop-types';

import './template.css';

const WeatherInfoBlock = ({ title, value }) => (
    <div className="info-block">
        <span>{title}</span>
        <span>{value}</span>
    </div>
)

WeatherInfoBlock.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
}

WeatherInfoBlock.defaultProp = {
    title: '',
    value: '',
}

export default WeatherInfoBlock;