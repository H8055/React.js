import React from "react";

function Form(props) {
  return (
    <form className="form">
      {props.isUserReg === true ? <h1>Login</h1> : <h1>Register</h1>}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isUserReg === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.isUserReg === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
