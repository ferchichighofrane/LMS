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
        <Card.Img variant="top" src={this.props.image}  style={{height:'17rem'}}/>
        <Card.Body>
          <Card.Title style={{width:'25rem', height:'48px'}}>{this.props.nom}</Card.Title>
          <Card.Text style={{width:'25rem', height:'144px'}}>
            {this.props.descrp}
          </Card.Text>
          <div className='d-flex justify-content-around'>
          <Button style={{width:'7rem'}} variant="primary" onClick={() => this.handleShow()}>More</Button>
         
          </div>
        </Card.Body>
        <PopUp show={this.state.show} handleClose={this.handleClose}  body={this.props.descrp} title={this.props.nom} imag={this.props.image} showForm={this.props.showForm} />
      </Card>
    )
  }
}
