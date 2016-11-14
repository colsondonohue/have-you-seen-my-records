import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import HomeContainer from './containers/HomeContainer';
import ResultsContainer from './containers/ResultsContainer';
/*import NotFound from './components/NotFound';*/

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/results' component={ResultsContainer} />
      {/*<Route path='*' component={NotFound} />*/}
    </Route>
  </Router>
);

export default routes;
