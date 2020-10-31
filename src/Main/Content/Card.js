import React from 'react';
import { Input, Button, Form, Segment, Grid, Icon, Card } from 'semantic-ui-react';

import PDF from './PDF';

const styles = {
    text: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': '4',
        '-webkit-box-orient': 'vertical',
    },
    share: {
        marginLeft: 20,
        color: 'blue',
    },
    download: {
        marginLeft: 20,
        color: 'green',
    },
    heart: { color: 'red' }
}

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default class CardData extends React.Component {

    state = { modal: false }

    render() {
        let temp = this.props.data;
        let { modal } = this.state;
        return (
            <Card style={{backgroundColor: '#ffffff', marginLeft: '5%', marginTop: '5%', width: '15%'}}>
                <Card.Content header>
                    <p>{temp.DocumentDate + " | " + temp.Language + " | " + temp.PublicationMethod}</p>
                    <div style={{fontSize: 15, marginTop: '5%', color: 'blue'}}>
                        <p style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            onClick={() => this.setState({ modal: true })}>{temp.DocumentTitle}</p>
                        {modal && <PDF open={modal} close={() => this.setState({modal: false})}/>}
                    </div>
                </Card.Content>
                <Card.Content description>
                    <p style={styles.text}>{lorem}</p>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='heart' style={styles.heart}/>{temp.Likes}
                    <Icon name='share' style={styles.share} />{temp.Shared}
                    <Icon name='download' style={styles.download} />{temp.Downloads}
                </Card.Content>
            </Card>
        );
        return (
            <Grid columns={1} divided style={{backgroundColor: '#ffffff', marginLeft: '5%', marginTop: '5%', width: '15%'}}>
                <Grid.Column>
                    <div>
                        <p>{temp.DocumentDate + " | " + temp.Language + " | " + temp.PublicationMethod}</p>
                    </div>
                    <div style={{fontSize: 15, marginTop: '5%', color: 'blue'}}>
                        <p style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}
                            onClick={() => this.setState({ modal: true })}>{temp.DocumentTitle}</p>
                        {modal && <PDF open={modal} close={() => this.setState({modal: false})}/>}
                    </div>
                    <hr />
                    <div>
                        <p>{temp.DocumentTitle}</p>
                    </div>
                    <hr />
                </Grid.Column>
            </Grid>
        );
    }

}