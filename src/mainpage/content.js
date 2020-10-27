import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Input, Button, Form } from 'semantic-ui-react';

export default class Content extends Component {

  render() {
    return(
      <div>
        <div style={{fontSize: 25, marginTop: 5, color: '#117A65'}}>
          <center>
            DATASETS
          </center>
          <Form style={{marginLeft: '15%', marginTop: '2%'}}>
            <Form.Input action={{Position: 'right', color: '#FDFEFE', icon: 'filter', content: 'Filter'}} size ='mini' icon='search' iconPosition='left'
              placeholder='Press enter to search'
              width={14} style={{Color: 'red', borderColor: 'white'}} />
          </Form>
          <Form.Group style={{marginLeft: '17%', marginTop: '1%'}}>
            <Button size= 'mini'>Business news</Button>
            <Button size= 'mini'>Technology news</Button>
            <Button size= 'mini'>Health news</Button>
            <Button size= 'mini'>Entertainment</Button>
            <Button size= 'mini'>Stocks</Button>
            <Button size= 'mini'>Weather</Button>
            <Button size= 'mini'>Tweets</Button>
            <Button size= 'mini'>Terms</Button>
            <Button size= 'mini'>Office Days</Button>
            <Button size= 'mini'>Currency</Button>
            <Button size= 'mini'>Crypto</Button>
          </Form.Group>
          <Button basic size= 'mini' color='black' style={{marginTop: '1%', marginLeft: '81%'}}>
            Request Dataset
          </Button>
        </div>
      </div>
    )
  }
}
