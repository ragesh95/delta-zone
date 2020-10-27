import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Input, Button, Form, Segment, Grid, Icon } from 'semantic-ui-react';

export default class Slide extends Component {

  render() {
    return(
      <div style={{marginTop:'2%'}}>
        <Segment style={{backgroundColor: '#EAF2F8'}} >
          <Grid column={4}>
            <Grid.Row>
              <div style={{marginLeft: '10%', fontSize: 17, marginTop: '1%'}}>
                Trending Open Datasets
              </div>
                <div style={{marginLeft: '1%', fontSize: 11, marginTop: '1.5%'}}>
                Reloading in 29 seconds
              </div>
              <div style={{marginLeft: '1%', fontSize: 11, marginTop: '1.8%', marginBottom: '13%'}}>
                <Icon name='close' />
              </div>
              <Grid  style={{backgroundColor: '#EAF2F8', marginLeft: '-27%', marginTop: '5%'}}>
                <div style={ { marginTop: '80%'}}>
                  <Icon name='angle left' size='big' />
                </div>
              </Grid>
              <Grid columns={1} divided style={{backgroundColor: '#D0D3D4', marginLeft: '5%', marginTop: '5%', width: '11%'}}>
                <Grid.Column>
                  <div style={{fontSize: 13, color: '#626567'}}>
                    Standard Business
                  </div>
                </Grid.Column>
                </Grid>
                <Grid columns={1} divided style={{backgroundColor: '#D0D3D4',marginLeft: '5%',marginTop: '5%', width: '11%'}}>
                  <Grid.Column >
                    <div style={{fontSize: 13, color: '#626567'}}>
                      BitCoin News Tweet
                    </div>
                  </Grid.Column>
                  </Grid>
                  <Grid columns={1} divided style={{backgroundColor: '#D0D3D4',marginLeft: '5%',marginTop: '5%', width: '11%'}}>
                    <Grid.Column >
                      <div style={{fontSize: 13, color: '#626567'}}>
                        NewYork Post Entertainment
                      </div>
                    </Grid.Column>
                    </Grid>
                  <Grid columns={1} divided style={{backgroundColor: '#D0D3D4',marginLeft: '5%',marginTop: '5%', width: '11%'}}>
                    <Grid.Column >
                      <div style={{fontSize: 13, color: '#626567'}}>
                        Corn Price Hot
                      </div>
                    </Grid.Column>
                  </Grid>
                <Grid columns={1} divided style={{backgroundColor: '#D0D3D4',marginLeft: '5%',marginTop: '5%', width: '11%'}}>
                  <Grid.Column >
                    <div style={{fontSize: 13, color: '#626567'}}>
                      GRM30 Price hot
                    </div>
                  </Grid.Column>
                </Grid>
                <Grid  style={{backgroundColor: '#EAF2F8', marginLeft: '5%', marginTop: '5%'}}>
                  <div style={ { marginTop: '80%'}}>
                    <Icon name='angle right' size='big' />
                  </div>
                </Grid>
            </Grid.Row>
          </Grid>
        </Segment>

      </div>
    )
  }
}
