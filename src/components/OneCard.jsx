import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PopUp from './PopUp';


export default class OneCard extends Component {
  constructor(props){
    super()
    this.state={
      show:false
    }
    this.handleClose=this.handleClose.bind(this)
  }
    

    handleShow() {
      this.setState({ show: true });}

      handleClose() {
        this.setState({ show: false });
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
          <Button variant="primary" onClick={() => this.handleShow()}>Go somewhere</Button>
        </Card.Body>
        <PopUp show={this.state.show} handleClose={this.handleClose}  body={this.props.descrp} title={this.props.nom} imag={this.props.image} showForm={this.props.showForm} />
      </Card>
    )
  }
}
