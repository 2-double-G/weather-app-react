import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/actionCreator';

import classes from './Weather.css';

import Form from '../../components/form/form';
import WeatherToday from '../WeatherToday/WeatherToday';

class WeatherApp extends Component {
    state = {
        city: '',
    }

    handleInputChange = (event) => {
        this.setState({
            city: event.target.value,
        })
    }

    getWeatherInfo = (event) => {
        event.preventDefault();

        const { city } = this.state; 
        const { fetchWeather } = this.props;
        fetchWeather(city);
    }

    isEmptyObject = (obj) => {
        return JSON.stringify(obj) === "{}" ? true : false;
    }

    render() {
        const { weatherInfo } = this.props.WeatherInfo;
        const isWeatherInfoEmpty = this.isEmptyObject(weatherInfo);
        console.log(weatherInfo.cod);
        return (
            <div className={classes.Weather}>
                <div className={classes.WeatherWrapper}>
                    <h1>Search weather</h1>
                    <Form onChange={this.handleInputChange} getWeather={this.getWeatherInfo}/>         
                    {isWeatherInfoEmpty || weatherInfo.cod === "404" || weatherInfo.cod === "400" 
                            ? <h2>Not found</h2>
                            : <WeatherToday main={weatherInfo.main}/>
                    } 
                </div>              
            </div>
        )
    }
}

export default connect(({ WeatherInfo }) => ({
    WeatherInfo,
}), { fetchWeather })(WeatherApp);