import React from 'react';
import Profiles from './container/Profiles';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Profiles />
    </Provider>
  );
};

export default App;