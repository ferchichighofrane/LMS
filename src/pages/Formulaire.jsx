import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import iset from "../assets/DSC_5148 (2).JPG";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Formation from "../components/Formation";

import galley7 from "../assets/galley7.JPG";
import gallery6 from "../assets/gallery6.JPG";
import gallery2 from "../assets/gallery2.JPG";
import gallery5 from "../assets/gallery5.JPG";
import galll1 from "../assets/11.JPG";
import galll2 from "../assets/12.JPG";
import galll3 from "../assets/23.JPG";
import galll4 from "../assets/33.JPG"



export default class Formulaire extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>

        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
             className="d-block w-100"
              src={this.props.selectedItem.image}
              alt="First slide"
              style={{ height: "35rem" }}
            />            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={iset}
              alt="Second slide"
              style={{ height: "35rem" }}
            />
            <Carousel.Caption>              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
              style={{ height: "35rem" }}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
        <h1 className="p-5 text-center">{this.props.selectedItem.title}</h1>
        </div>

        <div className="d-flex justify-content-center p-5 flex-wrap align-items-center flex-wrap">
          <h1 style={{ fontFamily: "Brittany Signature" }}>Pre-registration</h1>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }} 
          >  </div>
          <h1 className="p-5 text-center">{this.props.selectedItem.title}</h1>
          <h1 >{this.props.selectedItem.price}</h1>



        </div>

        
        <div className="d-flex justify-content-center p-5 flex-wrap align-items-center flex-wrap">
          <h1 style={{ fontFamily: "Brittany Signature" }}>Gallery</h1>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>
<div  className="d-flex flex-wrap gap-5 p-5 justify-content-center">
<img class="img-thumbnail" src={galley7} alt="" style={{  borderColor: 'black', borderWidth: 1,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={gallery6} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={gallery2} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={gallery5} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>

<img class="img-thumbnail" src={galll1} alt="" style={{  borderColor: 'black', borderWidth: 1,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={galll2} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={galll3} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>
<img class="img-thumbnail" src={galll4} alt="" style={{ borderColor: 'black', borderWidth: 1 ,height:"210px", width: "250px" }}/>
</div>



        </div>
<div  className="d-flex justify-content-center p-5 flex-wrap align-items-center flex-wrap" >
<h1 style={{ fontFamily: "Brittany Signature" }}>Reviews</h1>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>
        
</div>





        
</div>)}}














      

        {/* <div className="d-flex justify-content-around gap-5 p-5 align-items-center"> */}
          {/* <div  style={{width:"30rem", backgroundColor:"#FFFFF"}}  className="d-flex flex-wrap gap-4  ">
              
                <img src={this.props.selectedItem.html} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.css} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.bootstrap} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.js} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.jquery} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.react} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.node} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.git} alt="" width="35px" style={{height:"35px"}}/>
                <img src={this.props.selectedItem.github} alt="" width="35px" style={{height:"35px"}}/>
                
              
            </div> */}

         

{/*           
        </div>

        <div class="container-xxl py-5">
        <div class="container">





            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight:"400px" }}>
                    <div class="position-relative h-100 ">
                        <img class="img-fluid position-absolute w-100 h-100" src="{front}" alt="" style={{objectFit:"cover", borderRadius:"30%" }}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    
                    <h1 class="mb-4" style={{fontFamily: "Brittany Signature"}}>About the course</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>








      </div>
    );
  }
} */}