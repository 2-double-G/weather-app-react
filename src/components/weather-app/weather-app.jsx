import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { addCity } from '../../actions/actionCreator';

import './weather-app.css';

import Form from '../form/form';
import WeatherList from '../weather-list/weather-list';

const API_KEY = '4248d412b7d3efc097f20f1640cf0f2d';

class WeatherApp extends Component {
    state = {
        city: '',
        country: '',
    }

    getWeather = async (e) => {
        e.preventDefault();
        const {city, country} = this.state;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }

    addCity = (e) => {
        e.preventDefault();
        const { city, country } = this.state;
        console.log(city);
        console.log(country);
        const { addCity } = this.props;
        
        addCity((new Date()).getTime(), city, country);
        
        this.setState({
            city: '',
            country: '',
        })
      }



    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // handelShow = (e) => {
    //     e.preventDefault();
    //     const {city, country} = this.state;
    //     this.setState({
    //         city: '',
    //         country: '',
    //     })
    // }

    render() {

        const { tasks } = this.props;

        return (
            <div className="wrapper">
                <Form title="Search weather" onChange={this.handleInputChange} getWeather={this.addCity}/>
                <WeatherList citiesList={tasks}/>
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks,
}))(WeatherApp);