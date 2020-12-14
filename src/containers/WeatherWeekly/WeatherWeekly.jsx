import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./WeatherWeekly.module.scss";

import Loader from "./../../components/Loader/Loader";

import { fetchWeeklyWeather } from "../../store/actions/weather";

class WeatherWeekly extends Component {
  componentDidMount() {
    this.props.fetchWeeklyWeather();
  }

  showDate = (dateTime) => {
    const { timezone } = this.props;
    const options = { weekday: "long" };
    const myShift = -new Date().getTimezoneOffset() / 60;
    const cityShift = timezone / 3600;

    return new Date(
      dateTime * 1000 - (myShift - cityShift) * 1000 * 3600
    ).toLocaleDateString("en-US", options);
  };

  renderWeekly() {
    const { weather } = this.props;

    return weather.map(({ dt, icon, min, max }, index) => (
      <div key={index} className={classes.WeatherWeekly__item}>
        <span>{this.showDate(dt)}</span>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather condition"
          />
        </div>
        <span>{Math.round(max)}&deg;</span>
        <span>{Math.round(min)}&deg;</span>
      </div>
    ));
  }

  showCityName() {
    return localStorage.getItem("city").split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  render() {
    const { loading } = this.props;

    return (
        <div className={classes.WeatherWeekly}>
        <h2 className={classes.cityName}>{this.showCityName()}</h2>
          <h1>Weekly weather</h1>
          <div className={classes.description}>
            <span>Weekday</span>
            <span>Condition</span>
            <span>Max</span>
            <span>Min</span>
          </div>
          <div>{loading ? <Loader /> : this.renderWeekly()}</div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherToday.weatherWeekly,
    timezone: state.weatherToday.timezone,
    loading: state.weatherToday.loading,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeeklyWeather: () => dispatch(fetchWeeklyWeather()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWeekly);
