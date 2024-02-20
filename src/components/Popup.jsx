import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default class Popup extends Component {
    constructor(props){
        super()
    }

  render() {
    return (
      <div>
        <Modal  show={this.props.show}
        onHide={this.props.handleClose}
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter"
      centered 
    >


      <Modal.Header closeButton >
      <Modal.Title id="contained-modal-title-vcenter"  >
      <h3>{this.props.title}</h3>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center'>
        <img src={this.props.imag} alt="" style={{ width: '22rem' }} />
        </div>
        <p>
         {this.props.body}
        </p>
        <p>{this.props.duree}</p>
        <p>{this.props.lev}</p>
        <p>{this.props.pri}</p>
       
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button  onClick={()=>{this.props.handleClose()
         this.props.showForm({imag:this.props.imag,title:this.props.title,body:this.props.body})
        }}>S'inscrire</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}