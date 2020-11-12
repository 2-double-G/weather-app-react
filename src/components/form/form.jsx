import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

const Form = ({title, onChange, getWeather}) => (
    <form className="form">
        <h2 className="form__title">{title}</h2>
        <label className="form__label">
            <input
                className="form__input"
                type="text"
                name="city"
                onChange={onChange}
                placeholder="city"
            />
        </label>
        <button onClick={getWeather} className="form__btn">get weather</button>
    </form>
);

Form.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    getWeather: PropTypes.func,
}

Form.defaultProps = {
    title: '',
    onChange: () => {},
    getWeather: () => {},
}

export default Form;