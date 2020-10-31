import React, { Component } from 'react';

import './weather-app.css';

import Form from '../form/form';

const API_KEY = '4248d412b7d3efc097f20f1640cf0f2d';

class WeatherApp extends Component {
    state = {
        city: '',
        country: '',
        showData: {
            ci: '',
            co: '',
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
        const {city, country} = this.state;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handelShow = (e) => {
        e.preventDefault();
        const {city, country} = this.state;
        this.setState({
            city: '',
            country: '',
            showData: {
                ci: city,
                co: country,
            }
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Form title="Search weather" onChange={this.handleInputChange} getWeather={this.getWeather}/>
            </div>
        )
    }
}

export default WeatherApp;