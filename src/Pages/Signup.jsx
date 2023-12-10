import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = () => {};
  return (
    <div style={{ width: "100%" }}>
      Newbie? Sign up here
      <div style={{ border: "1px solid gray", width: "30%", margin: "auto" }}>
        Username
        <input type="text" placeholder="username" />
        <br />
        E-mail
        <input type="text" placeholder="email" /> <br />
        Password
        <input type="text" placeholder="password" /> <br />
        <button onClick={(e) => userRegister}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
