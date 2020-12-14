import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import WeatherToday from "./containers/WeatherToday/WeatherToday";
import WeatherHourly from "./containers/WeatherHourly/WeatherHourly";
import WeatherWeekly from "./containers/WeatherWeekly/WeatherWeekly";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/weekly"} component={WeatherWeekly} />
        <Route path={"/hourly"} component={WeatherHourly} />
        <Route path={"/"} component={WeatherToday} />
      </Switch>
    </Layout>
  );
}

export default App;
