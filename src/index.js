
import './config/util';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import {createBrowserHistory} from 'history';
import RootStore from './config/rootStore';
import {Main} from './modules/main'



const history = createBrowserHistory();


ReactDOM.render(
    <Provider rootStore={new RootStore()} >
        <Router history={history}>
            <Main/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

