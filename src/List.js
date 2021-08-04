import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "./ItemContext";

function List() {

  const {data, setData } = useContext(ItemContext);
  const [title, setTitle] = useState();

  const addItem = (title) => {
    const id = String(Math.random());
    const newItem = { id: id, title: title };
    const newData = [...data, newItem];
    setData(newData);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <input onChange={handleChange} />
        <button onClick={() => addItem(title)}>Submit</button>
      </div>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list-item">
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;