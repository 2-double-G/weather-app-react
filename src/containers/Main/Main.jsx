import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Main.css';
import GetWeather from './../GetWeather/GetWeather';
import Navigation from '../../components/Navigation/Navigation';

class Main extends Component {
    render() {
        return (
                <div className={classes.Main}>
                <GetWeather />
                { 
                    !this.props.touched
                        ? null
                        : !this.props.error
                            ? <Navigation />
                            : <p>Sorry, man. You are wrong.</p>
                }
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        touched: state.weatherToday.touched,
        error: state.weatherToday.error.isError
    }
}

export default connect(mapStateToProps)(Main);