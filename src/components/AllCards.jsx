import React, { Component } from 'react'
import data from '../data/data.json'
import OneCard from './OneCard'
import Card from 'react-bootstrap/Card';

export default class AllCards extends Component {
  render() {
    return (
      <div>
        {data.map(card=>(
            <Card key={card.id} image={card.src} nom={card.name} descrp={card.description} price={card.price}/>
        ))}
      </div>
    )
  }
}
