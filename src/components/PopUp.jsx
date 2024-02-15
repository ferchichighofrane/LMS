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


      <Modal.Header closeButton >
      <img src={this.props.imag} alt="" style={{ width: '25rem', display:'flex',justifyContent:'center' }} />
      </Modal.Header>
      <Modal.Body>
      <Modal.Title id="contained-modal-title-vcenter">
            
            {this.props.title}
          </Modal.Title>
        <h4></h4>
        <p>
         {this.props.body}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{this.props.handleClose()
        this.props.showForm({imag:this.props.imag,title:this.props.title,body:this.props.body})
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}
