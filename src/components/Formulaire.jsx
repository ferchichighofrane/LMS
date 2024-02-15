import React, { Component } from 'react'

export default class Formulaire extends Component {
constructor(props){
    super()
}

  render() {
    return (
      <div>
        <img src={this.props.selectedItem.imag} alt="" />
        <h1>{this.props.selectedItem.title}</h1>
        <p>{this.props.selectedItem.body}</p>
      </div>
    )
  }
}
