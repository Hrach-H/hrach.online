import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Raven from 'raven-js';

const ravenConfig = {
    logger: 'my-app',
    environment: 'development'
};
Raven.config('https://902e0f56d1634c52bd62ac82b246e9c7@sentry.io/361262', ravenConfig).install();
Raven.context(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

