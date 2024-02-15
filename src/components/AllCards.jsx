import React, { Component } from 'react'
import data from '../data/data.json'
import OneCard from './OneCard'
import Card from 'react-bootstrap/Card';

export default class AllCards extends Component {
  constructor(props){
    super()
  }


  render() {
    // console.log(data);
    return (
      <div className='d-flex flex-wrap gap-5 p-5 justify-content-center'>
        {data.map(card=>(
            <OneCard key={card.id} image={card.src} nom={card.name} descrp={card.description} price={card.price} showForm={this.props.showForm} />
        ))}
      </div>
    )
  }
}
