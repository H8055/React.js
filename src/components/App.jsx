import React from "react";
import Form from "./Form";
// import Login from "./login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <Login/> : <Form/>} */}
      <Form isUserReg={userIsRegistered} />
    </div>
  );
}

export default App;
