import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history"

const customHistory = createBrowserHistory()

import './sass/components/main.scss';

import Page from './page/Page.jsx';

const App = () => {
    return (
        <Router history={customHistory}>
            {/** put nav header here */}
            <div className="main">
                <Link to="/page">Test</Link>
                <Switch>
                    <Route path="/page" component={Page} />
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);