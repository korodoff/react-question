import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
            <h1 >Props{this.prop.name}</h1>

      </div>
    )
  }
}

export default Child
