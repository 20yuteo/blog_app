import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
