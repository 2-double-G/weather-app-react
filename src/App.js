import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import WeatherToday from './containers/WeatherToday/WeatherToday';
import WeatherHourly from './containers/WeatherHourly/WeatherHourly';
import WeatherWeekly from './containers/WeatherWeekly/WeatherWeekly';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/weekly'} component={WeatherWeekly}/>
        <Route path={'/hourly'} component={WeatherHourly}/>
        <Route path={'/today'} component={WeatherToday}/>
        <Route path={'/'} component={Main} />
      </Switch>   
    </Layout>
  );
}

export default App;
