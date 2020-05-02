import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
      };
/**
 * This function is called for every key stroke in input field. 
 * You can't change/type in textfield untill this function is added
 */
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          });
    };

    handleSubmit = e => {
        e.preventDefault();     //prevents refresh of page
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
      };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
            type="text" 
            className="input-text"
            placeholder="Add Todo..." 
            value={this.state.title} 
            name="title"
            onChange={this.onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
  }
}
export default InputTodo