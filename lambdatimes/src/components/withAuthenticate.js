import React, { Component } from "react";
import Login from "./Login";

const withAuthenticate = App =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        usernameInputText: ""
      };
      this.changeHandler = this.changeHandler.bind(this);
      this.login = this.login.bind(this);
    }

    changeHandler(e) {
      e.preventDefault();
      this.setState({
        loggedIn: false,
        usernameInputText: e.target.value
      });
    }

    login(e) {
      e.preventDefault();
      localStorage.setItem("username", this.state.usernameInputText);
      this.setState({
        loggedIn: true,
        usernameInputText: ""
      });
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      }
      return <Login login={this.login} changeHandler={this.changeHandler} />;
    }
  };

export default withAuthenticate;
