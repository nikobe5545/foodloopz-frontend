import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import createWebsocketMiddleware, {JSONCodec} from "./middleware/redux-websocket-middleware";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Root from "./components/home/Root";
import CreateUpdateContainer from "./containers/ads/CreateUpdateContainer";

const store = createStore(
    rootReducer,
    applyMiddleware(createWebsocketMiddleware({
        codec: JSONCodec
    }))
);

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/ad/view/:id?" component={CreateUpdateContainer}/>
                <Route path="/ad/edit/:id?" component={CreateUpdateContainer}/>
                <Route path="/" component={Root}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
