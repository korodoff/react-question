import React, { Component } from 'react'

export class ClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "FASNA BUHAIS"
      }
    }
  render() {
    return (
      <div>Im {this.state.name}</div>
    )
  }
}

export default ClassComp