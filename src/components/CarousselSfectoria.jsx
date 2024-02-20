import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import fabskillPhoto from '../assets/Fabskill.jpg';
import Groupesfec from '../assets/Groupesfec.jpg';
import Groupesf from '../assets/Groupesf.jpg';
import JCI from '../assets/JCI.jpg';


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
          height="550px"
        />
        </Carousel.Item>
      
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={Groupesfec}
          alt="First slide"
          height="500px"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={Groupesf}
          alt="First slide"
          height="500px"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={JCI}
          alt="First slide"
          height="550px"
        />
        </Carousel.Item>
        
    </Carousel> 
      </div>
    )
  }
}