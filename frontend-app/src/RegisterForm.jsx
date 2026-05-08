import React from "react";
import { Component } from "react";


class RegisterForm extends Component {
  render() {
    return (
      
       
           
            <form action="">
                <fieldset>
                   <h1> Register form</h1>
                   <label htmlfor="">Name:</label>
                   <input type="text" placeholder="name" id=""/><br></br>
                   <label htmlfor="">password:</label>
                   <input type="psw" placeholder="enter password" id=""/><br></br>
                   <label htmlfor="">email:</label>
                   <input type="text" placeholder="enter email" id=""/><br></br>
                   <label htmlfor="">ph no:</label>
                   <input type="tel" pattern="[6-9]{1}[0-9]{9}" placeholder="+91" id=""/><br></br>
                   <button type="submit">Register</button>
                   <button type="reset">Reset</button>
                </fieldset>
            </form>
        );
    };
 };
 export default RegisterForm;
    


