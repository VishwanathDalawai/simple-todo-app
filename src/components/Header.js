import React, { Component } from "react"

class Header extends Component {

    componentDidUpdate(prevProps, prevState) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if (prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = "Random Number "+ x+y+z;
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
    return (
        <header>
        {/*
        JavaScript expressions in JSX are written inside curly braces
        The second curly brace is for the inline styling in the form of a JavaScript object.
        */}
          <h1 style={{ fontSize: "25px", marginBottom: "15px", paddingTop: "50px"}}>Simple Todo App by Vishwa</h1>
          <span id="inH1"></span>
          <p style={{ fontSize: "19px", paddingTop: "10px", paddingBottom: "10px"}}>
            Please add to-dos item(s) through the input field
          </p>
        </header>
      )
    }
}

export default Header