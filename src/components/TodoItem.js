import React from "react";
import { FaTrash } from 'react-icons/fa';

class TodoItem extends React.Component {
    //child component of TodosList
  render() {
    return <li>
        <input type="checkbox" 
        checked={this.props.todo.completed} 
        onChange={() => this.props.handleChangePropsList(this.props.todo.id)}
        />
        <button onClick={()=> this.props.deleteTodoPropsList(this.props.todo.id)}> 
            <FaTrash /> 
        </button>
        {this.props.todo.title}
    </li>
  }
}

export default TodoItem