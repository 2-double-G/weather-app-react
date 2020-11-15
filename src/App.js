import React, { Fragment } from 'react';

// import Title from './components/title/title';
// import WeatherApp from './components/weather-app/weather-app';
// import Weather from './containers/Weather/Weather';
import GetWeather from './containers/GetWeather/GetWeather';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <Layout>
      <GetWeather />    
    </Layout>
  );
}

export default App;
