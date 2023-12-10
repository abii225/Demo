import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`https://proud-elk-peplum.cyclic.app/notes`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data.allnotes);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(notes, "updated notes");
  }, [notes]);

  const deleteData = (id) => {
    fetch(`https://proud-elk-peplum.cyclic.app/notes/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {notes.map((ele) => {
        return (
          <div style={{ backgroundColor: "white" }}>
            <h1>{ele.title}</h1>
            <p>{ele.content}</p>
            <button>Edit</button>
            <button onClick={deleteData(ele._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
