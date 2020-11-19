import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './WeatherWeekly.css';
import { fetchWeeklyWeather } from './../../actions/weather';
import { connect } from 'react-redux';
import Loader from './../../components/UI/Loader/Loader';

class WeatherWeekly extends Component {
    
    componentDidMount() {
        this.props.fetchWeeklyWeather();
    }

    showDate = dateTime => {
        const options = { weekday: 'long' };

        const myShift = - new Date().getTimezoneOffset() / 60;
        const cityShift = this.props.timezone / 3600;

        return new Date(dateTime * 1000 - (myShift - cityShift)*1000*3600).toLocaleDateString('en-US', options)
    }

    renderWeekly() {
        return this.props.weather.map((item, index) => {
            return (
                <div
                    key={index}
                    className={classes.WeatherWeekly__item}
                >
                    <span>{this.showDate(item.dt)}</span>
                    <div>
                        <img
                            src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt='Weather condition'
                        />
                    </div>
                    <span>{Math.round(item.max)}&deg;</span>
                    <span>{Math.round(item.min)}&deg;</span>
                </div>
            )
        })
    }

    showCityName() {
        if (!localStorage.getItem('city')) return localStorage.getItem('city');

        return localStorage.getItem('city').split(' ').map(word => {
            return word[0].toUpperCase() + word.slice(1);
        }).join(' ');
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.error
                        ? <Redirect to={'/'} />
                        : null
                }
                <div className={classes.WeatherWeekly}>
                    <h1>Weekly weather</h1>
                    <h2 className={classes.cityName}>{this.showCityName()}</h2>
                    <div className={classes.description}>
                        <span>Weekday</span>
                        <span>Condition</span>
                        <span>Max</span>
                        <span>Min</span>
                    </div>
                    <div>
                        {
                            this.props.loading
                                ? <Loader />
                                : this.renderWeekly()
                        }                  
                    </div>
                </div>               
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherToday.weatherWeekly,
        timezone: state.weatherToday.timezone,
        loading: state.weatherToday.loading,
        error: state.weatherToday.error.isError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchWeeklyWeather: () => dispatch(fetchWeeklyWeather()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeekly);