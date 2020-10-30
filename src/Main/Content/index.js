import React, { Component } from 'react';

import Trending from './Trending';
import Popular from './Popular';

export default class Slide extends Component {

  render() {
    return(
      <div style={{marginTop:'2%'}}>
        <Trending />
        <Popular />
      </div>
    )
  }
}
