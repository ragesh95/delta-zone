import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

import MainPage from './Main';

export default class App extends Component {

  render() {
    return (
        <Router>
          <MainPage /> 
        </Router>
    )
  }
}
