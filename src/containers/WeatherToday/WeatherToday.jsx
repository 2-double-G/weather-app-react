import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './WeatherToday.css';
import { fetchTodayWeather } from './../../actions/weather';

class WeatherToday extends Component {

    componentDidMount() {

        console.log('componentDidMount:', this.props.city);
        this.props.fetchTodayWeather(this.props.city);
    }

    showDate = dateTime => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateTime * 1000).toLocaleDateString('en-US', options)
    }
    
    render() {
        return (
            <div className={classes.WeatherToday}>
                <h1>Today's weather</h1>
                <div>
                    <div>
                        <span className={classes.city}>
                            {this.props.weather.name}
                        </span>
                        <small className={classes.date}>
                            {this.showDate(this.props.weather.dt)}
                        </small>
                        <span className={classes.condition}>
                            {this.props.weather.main}
                        </span>
                    </div>
                    <div>
                        <span className={classes.current}>
                            {Math.round(this.props.weather.temp)}&deg;
                        </span>
                        <span className={classes.MaxMin}>
                        {this.props.weather.temp_max}&deg; / {this.props.weather.temp_min}&deg;
                        </span>
                    </div>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherToday.weather,
        city: state.weatherToday.city,
        error: state.weatherToday.error.isError,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodayWeather: city => dispatch(fetchTodayWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);