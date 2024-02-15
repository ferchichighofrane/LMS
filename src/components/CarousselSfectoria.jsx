import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import fabskillPhoto from '../assets/Fabskill.jpg';
import iset from '../assets/DSC_5148 (2).JPG'
import team from '../assets/DSC_3719.png'
import nafel from '../assets/dab0498f-7405-497f-ae02-dde9fd87406a.jpg'
<assets />

export default class CarousselSfectoria extends Component {
  render() {
    return (
      <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fabskillPhoto}
          alt="First slide"
          height="700px"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nafel}
          alt="Second slide"
          height="700px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={team}
          alt="Third slide"
          height={"900px"}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel> 
      </div>
    )
  }
}
