import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Caturday from './components/caturday';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Caturday />, document.getElementById('root'));
registerServiceWorker();
