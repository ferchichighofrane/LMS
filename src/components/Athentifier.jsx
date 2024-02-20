import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import authentifier from '../assets/authentifier.jpg';

function FormGroupExample() {
  return (
    <div className='d-flex'>
       <img src={authentifier} alt="" style={{height:"350px"}} className='rounded float-left px-3'/>
      <Form className='py-5 justify-content-center'>
     
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button  onClick={()=>{this.props.handleClose()
          }} >ok</Button>
      </Form>
     
    </div>
   
  );
}

export default FormGroupExample;