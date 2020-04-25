import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedDashboard } from './components/Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './store/history';
import { ConnectedNavigation } from './components/Navigation';
import { ConnectTaskDetail } from './components/TaskDetail';
import { PrivateConnectedRoute } from './components/PrivateRoute';
import { ConnectedLogin } from './components/Login';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <ConnectedNavigation />
        <Switch>
          <PrivateConnectedRoute exact path="/dashboard" component={ConnectedDashboard} />
          <PrivateConnectedRoute exact path="/task/:id" component={ConnectTaskDetail} />
          <Route path="/" component={ConnectedLogin} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
