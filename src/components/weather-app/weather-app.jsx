import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchWeather } from '../../actions/actionCreator';

import './weather-app.css';

import Form from '../form/form';
// import WeatherList from '../weather-list/weather-list';

// const API_KEY = '4248d412b7d3efc097f20f1640cf0f2d';

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

        this.setState({
            city: '',
            country: '',
        })
    }

    render() {
        const weatherInfo = this.props.WeatherInfo;

        console.log(weatherInfo);
        return (
            <div className="wrapper">
                <Form title="Search weather" onChange={this.handleInputChange} getWeather={this.getWeatherInfo}/>
            </div>
        )
    }
}

export default connect(({ WeatherInfo }) => ({
    WeatherInfo,
}), { fetchWeather })(WeatherApp);