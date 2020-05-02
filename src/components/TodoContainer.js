import React from "react";

import TodosList from "./TodosList";
import Header from "./Header";


class TodoContainer extends React.Component {
  //Parent Component
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      },
      {
        id: 4,
        title: "Share it with your friends!",
        completed: false
      }
    ]
   };

  render() {
    return (
      <div>
      <Header />
      <TodosList todosprops={this.state.todos} /> {/* todosprops is props passed to TodosList component*/}
      </div>
    )
  }
}
export default TodoContainer