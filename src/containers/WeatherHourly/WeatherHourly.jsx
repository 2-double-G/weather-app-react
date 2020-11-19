import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchHourlyWeather } from '../../actions/weather';
import classes from './WeatherHourly.css';
import Loader from './../../components/UI/Loader/Loader';
import Button from './../../components/UI/Button/Button';
import { changeFilter } from './../../actions/filter';
import Auxiliary from './../../hoc/Auxiliary/Auxiliary';

const btn = [
    {
        id: '12 hour',
        value: 12
    },
    {
        id: '36 hour',
        value: 36
    },
    {
        id: '48 hour',
        value: 48
    }
]

class WeatherHourly extends Component {
  
    componentDidMount() {
        this.props.fetchHourlyWeather();
    }

    showDate = dateTime => {
        const options = { hour: 'numeric' };

        const myShift = - new Date().getTimezoneOffset() / 60;
        const cityShift = this.props.timezone / 3600;

        return new Date(dateTime * 1000 - (myShift - cityShift)*1000*3600).toLocaleDateString('en-US', options).split(',')[1]
    }

    renderButtons () {
        return btn.map((item, index) => {
            return (
                <Button
                    key={item.id + index}
                    value={item.value}
                    disabled={false}
                    onClick={() => this.props.changeFilter(item.value)}
                >
                    {item.id}
                </Button>
            );
        });
    }

    renderHourly () {
        return this.props.weather.map((item, index) => {
            return (
                <Auxiliary>
                    {
                        index < this.props.activFilter
                            ? <div
                                key={index}
                                className={classes.WeatherHourly__item}
                              >
                                    <span>{this.showDate(item.dt)}</span>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                        alt='Weather condition'
                                    />
                                    <span>{Math.round(item.temp)}&deg;</span>
                              </div>
                            : null
                    }
                </Auxiliary>
            );
        });
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
                <div className={classes.WeatherHourly}>
                    <h1>Hourly weather</h1>
                    <div className={classes.filterButtons}>                      
                        {this.renderButtons()}
                    </div>                  
                    <h2 className={classes.cityName}>{this.showCityName()}</h2>
                    <div>
                        {
                            this.props.loading
                                ? <Loader />
                                : this.renderHourly()
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weatherToday.weatherHourly,
        timezone: state.weatherToday.timezone,
        loading: state.weatherToday.loading,
        error: state.weatherToday.error.isError,
        activFilter: state.filter.activFilter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHourlyWeather: () => dispatch(fetchHourlyWeather()),
        changeFilter: activFilter => dispatch(changeFilter(activFilter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHourly);