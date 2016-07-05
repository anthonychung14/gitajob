import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { postFeedback } from 'actions/feedback'

class ProblemSolution extends Component {
  

  buttonClick() {
    console.log("clicked")
    return <ProblemSolution />
  }

  render() {
    return (
      <div>
        <h2>Hi</h2>
        <button onClick={this.buttonClick.bind(this)}>Click me</button>
      </div>
    )
  }
}

export default ProblemSolution