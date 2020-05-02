import React from "react"

class TodoItem extends React.Component {
    //child component of TodosList
  render() {
    return <li>{this.props.todo.title}</li>
  }
}

export default TodoItem