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
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={this.props.image}  style={{height:'12rem'}}/>
        <Card.Body>
          <Card.Title style={{width:'18rem', height:'48px'}}>{this.props.nom}</Card.Title>
          <Card.Text style={{width:'18rem', height:'144px'}}>
            {this.props.descrp}
          </Card.Text>
          <div className='d-flex justify-content-around'>
          <Button style={{width:'7rem'}} variant="info" onClick={() => this.handleShow()}>More</Button>
         
          </div>
        </Card.Body>
        <PopUp show={this.state.show} handleClose={this.handleClose}  body={this.props.descrp} title={this.props.nom} imag={this.props.image} showForm={this.props.showForm} html={this.props.html} css={this.props.css}  bootstrap={this.props.bootstrap} js={this.props.js} jquery={this.props.jquery} react={this.props.react}  node={this.props.node} git={this.props.git} github={this.props.github}/>
      </Card>
     )
  }
}
