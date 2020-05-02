import React from "react"

//Below is ES6 arrow function, it is same as function Header() {
const Header = () => {
    return (
        <header>
        {/*
        JavaScript expressions in JSX are written inside curly braces
        The second curly brace is for the inline styling in the form of a JavaScript object.
        */}
          <h1 style={{ fontSize: "25px", marginBottom: "15px", paddingTop: "50px"}}>Simple Todo App by Vishwa</h1>
          <p style={{ fontSize: "19px", paddingTop: "10px", paddingBottom: "10px"}}>
            Please add to-dos item(s) through the input field
          </p>
        </header>
      )
}

export default Header