import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PopUp from './PopUp';
import Formulaire from '../pages/Formulaire';


export default class OneCard extends Component {
  constructor(props) {
    super()
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
  }


  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }


  render() {

    return (
      <Card style={{ width: '20rem', height: "32rem" }}>
        <Card.Img variant="top" src={this.props.image} style={{ height: '12rem' }} className="thumb-img" />
        <Card.Body>
          <Card.Title style={{ width: '18rem', height: '65px' }}>{this.props.nom}</Card.Title>
          <Card.Text style={{ width: '18rem', height: '144px', paddingTop: "10px" }} >
            {this.props.descrp}
          </Card.Text>
          <div className='d-flex justify-content-around'>
            <Button style={{ width: '7rem' }} variant="info" onClick={() => this.props.showForm({
              image: this.props.image,
              title: this.props.title,
              price: this.props.price,
              body: this.props.body,
              html: this.props.html,
              css: this.props.css,
              bootstrap: this.props.bootstrap,
              js: this.props.js,
              jquery: this.props.jquery,
              react: this.props.react,
              node: this.props.node,
              git: this.props.git,
              github: this.props.github
            })}>More</Button>

          </div>
        </Card.Body>
      </Card>
    )
  }
}
