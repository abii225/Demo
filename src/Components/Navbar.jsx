import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = {};
  const [token] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(token, "from notes");
  }, [token]);

  return (
    <div style={{ height: "50px", backgroundColor: "lightcoral" }}>
      <div style={{ float: "right", width: "50%" }}>
        NotesApp
        <Link style={{ margin: "10px", fontSize: "1.5em" }} to="/">
          Home
        </Link>
        {token && (
          <Link style={{ margin: "10px", fontSize: "1.5em" }} to="/notes">
            notes
          </Link>
        )}
        {token && (
          <Link style={{ margin: "10px", fontSize: "1.5em" }} to="/addnotes">
            Add notes
          </Link>
        )}
        <Link style={{ margin: "10px", fontSize: "1.5em" }} to="/login">
          login
        </Link>
        <Link style={{ margin: "10px", fontSize: "1.5em" }} to="/signup">
          signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
