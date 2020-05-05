import React from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
  //Parent Component
  state = {
    todos: [],
    show: false  //just a variable for header component to see componentDidUpdate() method 
  }
  
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 5
      }
    }) 
      .then(response => this.setState({ todos: response.data }));
  }

   handleChangeVishwa = (id) => {
     this.setState({
       todos: this.state.todos.map(todoi => {
         if (todoi.id === id){
           todoi.completed = !todoi.completed;
         }
         return todoi;
       }),
       show: !this.state.show
     });
  };
  /**
   * Returns new array by removing id passed each time. i.e it returns items that dont match id 
   * ... is like static function. It allows us to grab only current items
   */
  delTodoVishwa = id => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(reponse =>
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          }),
        ],
      })
    ) //filter method returns new array by applying condition 
  };
  /**
   * adds a item to state
   */
  addTodoItem = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then(response =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      )
  }

  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show} />
        <InputTodo addTodoProps={this.addTodoItem}/>
        <TodosList 
        todosprops={this.state.todos} 
        handleChangePropsContainer={this.handleChangeVishwa} 
        deleteTodoPropsContainer={this.delTodoVishwa}
        /> 
          {/* todosprops is props passed to TodosList component*/}
      </div>
    )
  }
}
export default TodoContainer