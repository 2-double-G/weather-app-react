import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './WeatherToday.css';
import { fetchTodayWeather } from './../../actions/weather';
import Loader from './../../components/UI/Loader/Loader';

class WeatherToday extends Component {

    componentDidMount() {
        this.props.fetchTodayWeather(this.props.city);
    }

    showDate = dateTime => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateTime * 1000).toLocaleDateString('en-US', options);
    }
    
    render() {
        return (
            <Fragment>
                
                <div className={classes.WeatherToday}>
                    <h1>Today's weather</h1>
                    {
                        this.props.loading
                            ? <Loader />
                            : <div>
                                <div>
                                    <span className={classes.city}>
                                        {this.props.weather.name}
                                    </span>
                                    <small className={classes.date}>
                                        {this.showDate(this.props.weather.dt)}
                                    </small>
                                    <img
                                        className={classes.conditionIcon}
                                        src={`http://openweathermap.org/img/wn/${this.props.weather.icon}@2x.png`}
                                        alt="Condition icon"
                                    />
                                    <span className={classes.condition}>
                                        {this.props.weather.main}
                                    </span>
                                </div>
                                <div>
                                    <span className={classes.current}>
                                        {Math.round(this.props.weather.temp)}&deg;
                                    </span>
                                    <span className={classes.realFeels}>
                                        Real feels: {this.props.weather.feels_like}&deg;
                                    </span>
                                    <span className={classes.MaxMin}>
                                        {this.props.weather.temp_max}&deg; / {this.props.weather.temp_min}&deg;
                                    </span>
                                </div>
                            </div>
                    }
                </div>
            </Fragment>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherToday.weather,
        city: state.weatherToday.city,
        error: state.weatherToday.error.isError,
        loading: state.weatherToday.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodayWeather: city => dispatch(fetchTodayWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);