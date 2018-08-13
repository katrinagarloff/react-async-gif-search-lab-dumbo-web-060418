import React, { Component } from 'react'


export default class GifSearch extends Component{
  state = {input: ''}

  render(){
  return (
    <div>
      <input type="text" onChange={this.updateState}></input>
      <button onClick={this.handleSubmit}>search</button>
    </div>
  )
}

handleSubmit = () => {
  this.props.submitHandler(this.state.input)
}

updateState = (e) => {
  this.setState({input: e.target.value})
}
}
