import React, { Component } from "react";
import { Connect } from "react-redux";
import { getUsers } from "../redux/actions/userAction";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {users} = this.props.users;
    console.log(users);

    return {

    }
  }
}
