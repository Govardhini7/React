import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "",
       comments:"",
       topic:"react"
    }
  }
  HandleNameChange =(event) =>{
    this.setState({
      name :event.target.value
    })
  }
  HandleCommentChange = (event) =>{
    this.setState({
      comments: event.target.value
    })
  }
  HandleTopicChange = (event) =>{
    this.setState({
      topic: event.target.value
    })
  }
  HandleSubmit =(event) =>{
    alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
      <div>
        <label>Name</label>
        <input type="text"  value={this.state.name} onChange={this.HandleNameChange}/>
        
        <label>Comments</label>
        <textarea value={this.state.comments}
        onChange={this.HandleCommentChange}
        >
        </textarea>

        <label>Topic</label>
        <select value={this.state.topic} onChange={this.HandleTopicChange}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
        </select>

        <button type='submit'>Submit</button>
      </div>
      </form>
    )
  }
}

export default Form