import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/login/login.jsx';
import ViewClaim from './Components/viewClaims/viewClaims.jsx';
import Header from './Components/common/header.jsx';
import Footer from './Components/common/footer.jsx';
import Dashboard from './Components/dashboard/dashboard.jsx';
import Update from './Components/updateclaim/updateClaim.jsx';
import { Router, Route, Link, browserHistory, IndexRoute, useHistory, BrowserRouter } from 'react-router';
import AppRouter from './Components/common/appRoute.jsx';

ReactDOM.render((
       <Router history={browserHistory}>
              <Route path="/" component={AppRouter}>
                     <IndexRoute component={Login} />
                     <Route path="/viewClaim" component={ViewClaim} />
                     <Route path="/dashboard" component={Dashboard} />
                     <Route path="/update" component={Update} />
              </Route>
       </Router>
      
), document.getElementById('router'));
