import React from "react";
import { v4 as uuidv4 } from "uuid";

import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
  //Parent Component
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Share it with your friends and email vishwanathdalawai111@gmail.com that you followed this github!",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Be Happy, Be safe",
        completed: false
      }
    ]
   };
  
   handleChangeVishwa = (id) => {
     this.setState({
       todos: this.state.todos.map(todoi => {
         if (todoi.id === id){
           todoi.completed = !todoi.completed;
         }
         return todoi;
       })
     });
  };
  /**
   * Returns new array by removing id passed each time. i.e it returns items that dont match id 
   * ... is like static function. It allows us to grab only current items
   */
  delTodoVishwa = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    }); //filter method returns new array by applying condition 
  };
  /**
   * adds a item to state
   */
  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
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