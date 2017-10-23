import React from 'react';
import ReactDOM from 'react-dom';
import Hamster from './Hamster';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hamster />, document.getElementById('root'));
registerServiceWorker();
