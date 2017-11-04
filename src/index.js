import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import HamsterContainer from './container/HamsterContainer';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/hamster.css';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HamsterContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
