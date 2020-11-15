import React from 'react';
import classes from './Input.css';

function isInvalid({ valid, touched }) {
    return !valid && touched;
}

const Input = (props) => {
    const htmlFor = 'input-city';
    const cls = [classes.Input];

    if (isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{ props.label }</label>
            <input
                type="text"
                name={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage}</span>
                    : null
            }
        </div>
    )
}

export default Input;