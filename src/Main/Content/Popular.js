import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Input, Button, Form, Segment, Grid, Icon } from 'semantic-ui-react';

import Card from './Card';
import TemplateData from '../../Data/Template.json';

export default class Popular extends Component {

  state = { position: 1 }

  next = () => {
    let { position } = this.state;
    position += 1;
    if (position * 4 > TemplateData.length) position = 0;
    this.setState({ position });
  }

  previous = () => {
    let { position } = this.state;
    position -= 1;
    if (position < 0) return;
    this.setState({ position });
  }

  componentDidMount() {
    TemplateData.map((temp) => {
      console.log(temp);
    });
  }

  render() {
    let cards = [];
    for (let i = this.state.position * 4; i < TemplateData.length; i++) {
      if (i > this.state.position * 4 && i % 4 == 0) break;
      let temp = TemplateData[i];
      cards.push(
        <Grid.Column><Card data={temp}/></Grid.Column>
      );
    }
    return (
      <div style={{marginTop:'2%'}}>
        <Segment style={{backgroundColor: '#EAF2F8'}} >
          <Grid column={4}>
            <Grid.Row>
              <div style={{marginLeft: '10%', fontSize: 17, marginTop: '1%'}}>
                Popular Open Datasets
              </div>
              <div style={{marginLeft: '1%', fontSize: 11, marginTop: '1.5%'}}>
                Reloading in 29 seconds
              </div>
              <div style={{marginLeft: '1%', fontSize: 11, marginTop: '1.8%'}}>
                <Icon name='close' />
              </div>
            </Grid.Row>
          </Grid>
          <Grid columns="equal">
            <Grid.Column>
              <center style={{marginTop: '50%'}} onClick={this.previous}>
                <Icon name='angle left' size='big' />
              </center>
            </Grid.Column>
            {cards}
            <Grid.Column>
              <center style={{marginTop: '50%'}} onClick={this.next}>
                <Icon name='angle right' size='big' />
              </center>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
