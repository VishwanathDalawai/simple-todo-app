import React from "react";
import { FaTrash } from 'react-icons/fa';

class TodoItem extends React.Component {
    //child component of TodosList

  render() {
      
    const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
    }

    const { completed, id, title } = this.props.todo

    return <li className="todo-item">
        <input 
            type="checkbox" 
            checked={completed} 
            onChange={() => this.props.handleChangePropsList(id)}
        />
        <button onClick={()=> this.props.deleteTodoPropsList(id)}> 
            <FaTrash /> 
        </button>
        <span style={completed ? completedStyle : null}> {/* Terenary operator */}
            {title}
        </span>
    </li>
  }
}

export default TodoItem