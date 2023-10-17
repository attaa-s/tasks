import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Newtodo = () => {
  const history = useNavigate();
  const titleinput = useRef();
  const descrinput = useRef();
  function handelonsubmit(e) {
    e.preventDefault();
    const enteredtitle = titleinput.current.value;
    const entereddescrip = descrinput.current.value;

    const newdata = {
      title: enteredtitle,
      description: entereddescrip,
    };

    fetch(
      "https://todo-26f2f-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(newdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history("/", { replace: true });
    });
  }
  return (
    <form onSubmit={handelonsubmit}>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" required id="title" ref={titleinput}></input>
      </div>
      <div>
        <label htmlFor="description">description</label>
        <textarea
          required
          id="description"
          rows="5"
          ref={descrinput}
        ></textarea>
      </div>
      <div>
        <button>addnew</button>
      </div>
    </form>
  );
};

export default Newtodo;
