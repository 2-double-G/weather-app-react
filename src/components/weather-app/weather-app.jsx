import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchWeather } from '../../actions/actionCreator';

import './weather-app.css';

import Form from '../form/form';
import WeatherInfo from '../weather-info/weather-info';

class WeatherApp extends Component {
    state = {
        city: '',
        country: '',
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    getWeatherInfo = (event) => {
        event.preventDefault();

        const { city, country } = this.state; 
        const { fetchWeather } = this.props;
        fetchWeather(city, country);
    }

    isEmptyObject = (obj) => {
        return JSON.stringify(obj) === "{}" ? true : false;
    }

    render() {
        const { weatherInfo } = this.props.WeatherInfo;
        const { city, country } = this.state;
        const isWeatherInfoEmpty = this.isEmptyObject(weatherInfo);
 
        return (
            <div className="wrapper">
                <Form title="Search weather" onChange={this.handleInputChange} getWeather={this.getWeatherInfo}/>
                {!isWeatherInfoEmpty && <WeatherInfo city={weatherInfo.name} country={weatherInfo.sys.country} condition={weatherInfo.weather[0].main} clouds={weatherInfo.clouds.all} main={weatherInfo.main}/>}
            </div>
        )
    }
}

export default connect(({ WeatherInfo }) => ({
    WeatherInfo,
}), { fetchWeather })(WeatherApp);