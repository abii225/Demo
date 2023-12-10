import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Notes from "../Pages/Notes";
import Addnotes from "../Pages/Addnotes";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/addnotes" element={<Addnotes />}></Route>
        <Route path="*" element={<h1>404 Not found ...</h1>}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
