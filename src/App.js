import React, { Fragment } from 'react';

import Title from './components/title/title';
import WeatherApp from './components/weather-app/weather-app';
import ErrorBoundary from './components/error-boundary/error-boundary';

function App() {
  return (
    <Fragment>
      <Title title="Weather app"/>
      <ErrorBoundary>
        <WeatherApp />
      </ErrorBoundary>     
    </Fragment>
  );
}

export default App;
