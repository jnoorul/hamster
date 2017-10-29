import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import Hamster from './container/Hamster';
import registerServiceWorker from './registerServiceWorker';
import './assets/hamster.css';


ReactDOM.render(<Hamster />, document.getElementById('root'));
registerServiceWorker();
