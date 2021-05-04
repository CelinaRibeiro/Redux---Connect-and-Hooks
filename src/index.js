import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//import { createStore } from 'redux';
//import Reducers from './reducers';
import App from './App';
import { store, persistor } from './store';


//cria o store 
//const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

