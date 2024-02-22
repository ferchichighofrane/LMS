import React, { Component } from "react";
import data from "../data/data.json";
import OneCard from "./OneCard";
import Card from "react-bootstrap/Card";

export default class AllCards extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div style={{backgroundColor:"#F4FAFB",marginTop:"10rem"}}>
        <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
        <h1 style={{fontFamily:'Brittany Signature'}}>Our Courses</h1>
        <div style={{height:"5px", width: "80px", backgroundColor: "rgb(66, 177, 188)", marginRight: "42px" }} >
          </div>  
        </div>

          <div className="d-flex flex-wrap gap-5 p-5 justify-content-center">
            {data.map((card) => (
              <OneCard
                key={card.id}
                image={card.src}
                nom={card.name}
                descrp={card.description}
                title={card.title}
                price={card.price}
                html={card.html}
                css={card.css}
                bootstrap={card.bootstrap}
                js={card.js}
                jquery={card.jquery}
                react={card.react}
                node={card.node}
                git={card.git}
                github={card.github}
                showForm={this.props.showForm}
              />
            ))}
          </div>
        </div>
      
    );
  }
}
