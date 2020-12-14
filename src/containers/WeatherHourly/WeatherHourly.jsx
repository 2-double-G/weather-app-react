import React, { Component } from "react";
import { connect } from "react-redux";

import { Card } from "./Card";
import Loader from "./../../components/Loader/Loader";

import { fetchHourlyWeather } from "../../store/actions/weather";
import { changeFilter } from "../../store/actions/filter";

const btn = [
  {
    id: "12 hour",
    value: 12,
  },
  {
    id: "36 hour",
    value: 36,
  },
  {
    id: "48 hour",
    value: 48,
  },
];

class WeatherHourly extends Component {
  componentDidMount() {
    this.props.fetchHourlyWeather();
  }

  renderButtons() {
    const { changeFilter } = this.props;

    return btn.map(({ id, value }) => (
        <button
          key={id}
          type="button"
          class="btn btn-outline-light mx-2 text-uppercase"
          onClick={() => changeFilter(value)}
        >
          {id}
        </button>
      )
    );
  }

  renderHourly() {
    const { weather, activFilter, timezone } = this.props;

    return weather.map(({ dt, icon, temp }, index) =>
      index < activFilter ? (
        <div key={index} className="col-sm-3 mb-4">
          <Card dt={dt} icon={icon} temp={temp} timezone={timezone} />
        </div>
      ) : null
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
    return (
      <div className="container text-center">
        <h1>{this.showCityName()}</h1>
        <h2>Hourly weather</h2>
        <div className="m-4">{this.renderButtons()}</div>
        <div className="row">
          {this.props.loading ? <Loader /> : this.renderHourly()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherToday.weatherHourly,
    timezone: state.weatherToday.timezone,
    loading: state.weatherToday.loading,
    activFilter: state.filter.activFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHourlyWeather: () => dispatch(fetchHourlyWeather()),
    changeFilter: (activFilter) => dispatch(changeFilter(activFilter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHourly);
