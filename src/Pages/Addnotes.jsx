import React, { useState } from "react";

const Addnotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postData = (e) => {
    e.preventDefault();
    fetch(`https://proud-elk-peplum.cyclic.app/notes/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title: title, content: content }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          cols="30"
          rows="10"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button onClick={(e) => postData(e)}>Submit</button>
      </form>
    </div>
  );
};

export default Addnotes;
