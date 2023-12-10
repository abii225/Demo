import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const loginData = () => {
    console.log(email, pass, "frontend userdetails");
    fetch(`https://proud-elk-peplum.cyclic.app/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ width: "100%" }}>
      Already have an account? Login here
      <div style={{ border: "1px solid gray", width: "30%", margin: "auto" }}>
        E-mail
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />{" "}
        <br />
        Password
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />{" "}
        <br />
        <button onClick={(e) => loginData()}>Login</button>
      </div>
    </div>
  );
};

export default Login;
