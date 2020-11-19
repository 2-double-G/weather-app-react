import React, { Component } from 'react';
import classes from './WeatherWeekly.css';

export default class WeatherWeekly extends Component {
    state = {  }
    render() {
        return (
            <div className={classes.WeatherWeekly}>
                <h1>Weekly weather</h1>
            </div>
        )
    }
}