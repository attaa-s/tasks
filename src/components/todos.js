import React, { useEffect, useState } from "react";
import Singletodo from "./singletodo";

const Todos = () => {
  const [loaded, setloaded] = useState(true);
  const [loaddata, setloaddata] = useState([]);

  useEffect(() => {
    setloaded(true);
    fetch(
      "https://todo-26f2f-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    )
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        const todos = [];

        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };
          todos.push(todo);
        }
        setloaded(false);
        setloaddata(todos);
      });
  }, []);

  const data = loaddata;
  if (loaded) {
    return <h1>Loading ......</h1>;
  }

  return (
    <div className="container">
      {data.map((todo) => (
        <Singletodo
          id={todo.id}
          title={todo.title}
          description={todo.description}
          status={todo.status}
        />
      ))}
    </div>
  );
};

export default Todos;
