import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConnectedDashboard } from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ConnectedDashboard />
      </div>
    </Provider>
  );
}

export default App;
