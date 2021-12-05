import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {

  constructor(){
      super()
      this.state = {
        text: ""
      }
  }

  // arrow functions don't define their own version of `this` 
  // they'll default to the context they are in.
  // the value of `this` is now the specific instance of the CreateTodo component
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })

  }

  handleSubmit = (event) => {
     event.preventDefault()
     this.props.addTodo(this.state)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add todo" name="name" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData}) 
  } 
}

export default connect(null, mapDispatchToProps)(CreateTodo);
