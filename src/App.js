import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import GetWeather from './containers/GetWeather/GetWeather';
import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/'} component={Main} />
        <Route path={'/today'} component={Main}/>
      </Switch>   
    </Layout>
  );
}

export default App;
