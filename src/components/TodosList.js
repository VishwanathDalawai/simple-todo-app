import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    //child component of TodoContainer and parent component of TodoItem
  render() {
    return (
      <div>
        {this.props.todosprops.map(todo => (
            <TodoItem
             key={todo.id} 
             todo={todo} 
             handleChangePropsList={this.props.handleChangePropsContainer}
             deleteTodoPropsList={this.props.deleteTodoPropsContainer}    
             />
        ))}
        {/*Whenever you map through something, a list is created.
        React want each child in the list to have a unique key(id) prop. 
        This helps React to identify which items have changed, added or removed */}
      </div>
    )
  }
}

export default TodosList