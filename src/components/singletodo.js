import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Singletodo = (props) => {
  const id = props.id;
  const history = useNavigate();

  const [finish, setfinish] = useState(false);
  const [Progress, setProgress] = useState(false);
  const selected = useRef("Not Started");
  function handelonclick(e) {
    console.log(selected.current.value);
    if (selected.current.value === "In Progress") {
      setProgress(true);
    }
    if (selected.current.value === "Finished") {
      setfinish(true);
    }
    if (selected.current.value === "Not Started") {
      setProgress(false);
      setfinish(false);
    }
  }

  function delethandler(e) {
    fetch(
      `https://todo-26f2f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Data deleted successfully");
          history("/add", { replace: true });
        } else {
          console.error("Failed to delete data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <div
        className={
          finish ? "finished" : "notfinished" && Progress ? "progress" : null
        }
      >
        <h1>title :{props.title}</h1>
        <p>description :{props.description}</p>

        <label htmlFor="todos">status</label>
        <select
          name="status"
          id="status"
          ref={selected}
          onChange={handelonclick}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Finished">Finished</option>
        </select>
        <div>
          <button onClick={delethandler}>deletetask</button>
        </div>
      </div>
    </div>
  );
};

export default Singletodo;
