import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      { routes.map( route => (
          <Route key={ route.path } { ...route } />
      ) ) }
      </Switch>
  </BrowserRouter>
  );
}

export default App;
