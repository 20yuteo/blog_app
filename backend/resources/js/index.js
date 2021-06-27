import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './reducks/store/store';
import {ConnectedRouter} from "connected-react-router";
import * as History from 'history';
import App from './views/App';

const history = History.createBrowserHistory();

export const store = createStore(history);

if (document.getElementById('app')) {
    ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app'));
}
