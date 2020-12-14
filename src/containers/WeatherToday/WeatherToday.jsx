import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./WeatherToday.module.scss";
import { fetchTodayWeather } from "../../store/actions/weather";
import Loader from "./../../components/Loader/Loader";

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchTodayWeather();
  }

  showDate = (dateTime, timezone) => {
    const options = { year: "numeric", month: "long", day: "numeric" };

    const myShift = -new Date().getTimezoneOffset() / 60;
    const cityShift = timezone / 3600;

    return new Date(
      dateTime * 1000 - (myShift - cityShift) * 1000 * 3600
    ).toLocaleDateString("en-US", options);
  };

  renderTodayWeather() {
    const { weather = {} } = this.props;
    const { dt, main, icon, temp, feels_like, temp_max, temp_min, timezone } = weather;

    return (
      <div className="row border border-white rounded-1 p-3">
        <div className="col-sm p-1 d-flex flex-column justify-content-around align-items-center">
          <span className={classes.date}>{this.showDate(dt, timezone)}</span>
          <img
            className={classes.conditionIcon}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Condition icon"
          />
          <span className={classes.condition}>{main}</span>
        </div>
        <div className="col-sm p-1 d-flex flex-column justify-content-between align-items-center">
          <span className={classes.current}>{Math.round(temp)}&deg;</span>
          <span className={classes.realFeels}>
            Real feels: {feels_like}&deg;
          </span>
          <span className={classes.MaxMin}>
            {temp_max}&deg; / {temp_min}&deg;
          </span>
        </div>
      </div>
    );
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
      <div className="container text-center">
        <h1>{this.showCityName()}</h1>
        <h2 className="mb-4">Today's weather</h2>
        {loading ? <Loader /> : this.renderTodayWeather()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherToday.weather,
    loading: state.weatherToday.loading,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodayWeather: (city) => dispatch(fetchTodayWeather(city)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherToday);
