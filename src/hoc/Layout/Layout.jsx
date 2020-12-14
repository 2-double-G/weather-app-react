import React from "react";
import { connect } from "react-redux";

import classes from  "./Layout.module.scss";

import { Header } from "../../components/Header/Header";

import GetWeather from "./../../containers/GetWeather/GetWeather";
import Navigation from "../../components/Navigation/Links/Links";

const Layout = props => {
  const renderChildren = (touched, children, isError) => {
    return isError ? (<h1>Sorry, man. You are wrong...</h1>)
      : (touched ? (children) : (<h1>Enter city!</h1>));
  };

  const { touched, children, isError } = props;

  return (
    <div className={classes.Layout}>
      <Header>
        <GetWeather />
        <Navigation />
      </Header>
      <main>{renderChildren(touched, children, isError)}</main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    touched: state.city.touched,
    isError: state.city.isError,
  };
};

export default connect(mapStateToProps)(Layout);