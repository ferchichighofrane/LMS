import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popup from './Popup';



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
      <div>
         <Card style={{ width: '21rem', height:"35rem" }} className='border border-info'>
          <img src={this.props.image} alt="" style={{height:"250px"}}/>
      {/* <Card.Img variant="top" style={{width:"18rem", height:"40rem"}} src={this.props.image} /> */}
      <Card.Body className='p-0'>
      <Card.Title  className='text-center py-3'>{this.props.nom}</Card.Title>
        {/* <Card.Title className='p-3'>{this.props.nom}</Card.Title> */}
        <Card.Text className='px-3' style={{ height:"5rem"}}>{this.props.descrp}</Card.Text>
        {/* <Card.Text>{this.props.duree}</Card.Text>
        <Card.Text>{this.props.lev}</Card.Text>*/}
        <Card.Text className='text-center'>{this.props.pri}</Card.Text> 
        <div className='d-flex justify-content-center'>
        <Button  variant="outline-info" onClick={() => this.handleShow()} >Lire plus</Button>

        </div>
        
      </Card.Body>
      <Popup show={this.state.show} handleClose={this.handleClose}  body={this.props.descrp} duree={this.props.duree} title={this.props.nom} lev={this.props.lev} pri={this.props.pri} imag={this.props.image} showForm={this.props.showForm} />
    </Card>
      </div>
  
    )
  }
}
