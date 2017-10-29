import React from 'react';
import ReactDOM from 'react-dom';
import Hamster from './container/Hamster';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './assets/hamster.css';
ReactDOM.render(<Hamster />, document.getElementById('root'));
registerServiceWorker();
