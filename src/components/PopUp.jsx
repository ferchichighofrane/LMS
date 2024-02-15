import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class PopUp extends Component {
    constructor(props){
        super()
    }



  render() {
    return (
      <div>
        <Modal show={this.props.show}
        onHide={this.props.handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >


      <Modal.Header closeButton>
      <img src={this.props.imag} alt="" style={{ width: '20rem' }} className='d-flex justify-content-center'/>
      
        <Modal.Title id="contained-modal-title-vcenter">
            
          {this.props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p>
         {this.props.body}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}
