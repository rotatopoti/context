import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from "./ItemContext";

// Component for displaying detail data
function Detail({
  match: {
    params: { id }
  }
}) {
  // Placeholder for item data moved to context
  const {data, setData } = useContext(ItemContext);
  const [title, setTitle ] = useState('');
 


  useEffect( () => {
    console.log(data);
    const item =  data.find(( element => element.id === id ));
    setTitle(item.title);
  }, [])

  return (
    <div className="container">
      <div className="card">
        <h1>{title}</h1>
        <h3>ID: {id}</h3>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default Detail;