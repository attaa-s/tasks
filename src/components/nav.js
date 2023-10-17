import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navgeneral">
      <ul className="navitem">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/add"> Add New Task </Link>
        </li>
        <li>
          <Link to="/edit">Edit Task</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
