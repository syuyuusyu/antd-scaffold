
import './config/util';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import {createBrowserHistory} from 'history';
import RootStore from './config/rootStore';



const history = createBrowserHistory();


ReactDOM.render(
    <Provider rootStore={new RootStore()} >
        <Router history={history}>
            <div>main</div>
        </Router>
    </Provider>,
    document.getElementById('app')
);

