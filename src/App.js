import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import {Button } from 'semantic-ui-react';

import MainPage from './mainpage';
import Content from './mainpage/content';
import Slide from './mainpage/silde';

export default class App extends Component {

  render() {
    return (
        <Router>
          <MainPage />
          <Content />
          <Slide />
        </Router>
    )
  }
}
