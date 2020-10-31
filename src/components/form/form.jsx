import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

const INPUT = [
    {
        id: 'city',
        name: 'city',
    },
    {
        id: 'country',
        name: 'country',
    },
]

const Form = ({title, onChange, getWeather}) => (
    <form className="form">
        <h2 className="form__title">{title}</h2>
        {INPUT.map(({ id, name }) => (      
            <label key={id} className="label">
                <input
                    type="text"
                    name={name}
                    onChange={onChange}
                    className="input"
                    placeholder={name}
                />
            </label>
        ))}
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