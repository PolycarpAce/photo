import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Images from "./Images";
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
const hist =createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path exact="/" component={App}/>
            <Route path exact="/images" component={Images}/>
        
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
