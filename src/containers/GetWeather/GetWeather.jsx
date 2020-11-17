import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './GetWeather.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { fetchTodayWeather } from './../../actions/todayWeather';

class GetWeather extends Component {
    state = {
        isFormValid: false,
        inputControl: {
            value: '',
            label: 'City',
            errorMessage: 'Enter the city name correctly',
            valid: false,
            touched: false,
            validation: {
                minLength: 1,
                required: true
            }
        }
    }

    validation(value, validation) {
        if (!validation) return true;

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
 
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }
      
        return isValid;
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const inputControl = { ...this.state.inputControl };
        
        inputControl.value = event.target.value;
        inputControl.touched = true;
        inputControl.valid = this.validation(inputControl.value, inputControl.validation);

        const isFormValid = inputControl.valid;

        this.setState({
            isFormValid,
            inputControl
        });
    }

    getWeather = () => {
        if (this.state.isFormValid) {
            this.props.fetchTodayWeather(this.state.inputControl.value);
        }
    }

    renderInput() {
        const inputControl = { ...this.state.inputControl };

        return (
            <Input
                value={inputControl.value}
                label={inputControl.label}
                valid={inputControl.valid}
                touched={inputControl.touched}
                errorMessage={inputControl.errorMessage}
                onChange={this.handleInputChange}
            />
        )
    }

    renderButton() {
        return (
            <Button
                disabled={!this.state.isFormValid}
                onClick={this.getWeather}
            >
                Get weather
            </Button>
        )
    }

    render() {
        return (
            <div className={classes.GetWeather}>
                <h1>Search weather</h1>
                <form onSubmit={this.onFormSubmit} className={classes.SearchForm}>
                    {this.renderInput()}
                    {this.renderButton()}
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodayWeather: city => dispatch(fetchTodayWeather(city))
    }
}

export default connect(null, mapDispatchToProps)(GetWeather);