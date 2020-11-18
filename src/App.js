import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import WeatherToday from './containers/WeatherToday/WeatherToday';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/today'} component={WeatherToday}/>
        <Route path={'/'} component={Main} />
      </Switch>   
    </Layout>
  );
}

export default App;
