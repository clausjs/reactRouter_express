import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './sass/components/main.scss';

const App = () => {
    return (
        <Router>
            {/** put nav header here */}
            <Switch>
                {/** Routes here */}
            </Switch>
        </Router>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);