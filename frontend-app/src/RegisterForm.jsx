import React from "react";
import { Component } from "react";


class RegisterForm extends Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
}

export default RegisterForm;