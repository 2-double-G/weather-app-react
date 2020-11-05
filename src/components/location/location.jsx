import React from 'react';
import PropTypes from 'prop-types';

import './location.css';

const Location = ({ city, country }) => (
    <div className="location">
        <div className="location__item">
            <span>City</span>
            <span>{city}</span>
        </div>
        <div className="location__item">
            <span>Country</span>
            <span>{country}</span>
        </div>
    </div>
);

Location.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
}

Location.defaultProp = {
    city: '',
    country: '',
}

export default Location;