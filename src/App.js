import React, { Fragment } from 'react';

import Title from './components/title/title';
import WeatherApp from './components/weather-app/weather-app';

function App() {
  return (
    <Fragment>
      <Title title="Weather app"/>
      <WeatherApp />
    </Fragment>
  );
}

export default App;
