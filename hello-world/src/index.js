import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Router, hashHistory, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'    ;
import Track from './track'
import About from './about'

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/about" component={About}/>
            <Route path="/tracks/:id" component={Track}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);
