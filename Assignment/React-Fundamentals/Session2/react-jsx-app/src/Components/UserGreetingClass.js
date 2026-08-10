import React, { Component } from 'react'

export class UserGreetingClass extends Component {
  render() {
    return (
      <div>
        <h3>HELLO , {this.props.username}</h3>
      </div>
    )
  }
}

export default UserGreetingClass
