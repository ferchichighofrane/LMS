import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class OneCard extends Component {
  constructor(props){
    super()
    
  }
  render() {
   
    return (
        <Card style={{ width: '27rem' }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.nom}</Card.Title>
          <Card.Text>
            {this.props.descrp}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}
