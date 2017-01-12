import React from 'react'
import ReactDOM from 'react-dom';

import About from './components/about/about.js'
import NavBar from './components/nav/nav-bar.js'

// First we import some modules...
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


function Home() {
    return (
        <h1>Welcome to the Airboard</h1>
    );
}

function Inbox() {
  return (
      <h1>this is inbox page</h1>
  )
}

const App = React.createClass({
  render() {
    return (
        <div>
          <h1>Airboard</h1>
          <NavBar/>
          {this.props.children}
        </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      (
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="about" component={About} />
              <Route path="inbox" component={Inbox} />
            </Route>
          </Router>
      ),  document.getElementById('app-view')
  );
});