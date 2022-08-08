import React from "react";

function Beer(props) {
  return (
    <li className="beer-display">
      <h3>{props.name}</h3>
      <img className="image" src={props.image} alt={props.name} />
      <button onClick={() => props.likeBeer(props.id)}>
        {props.text}
        {/* {props.beers.id === props.id ? "I like" : "Don't Like"} */}
        {/* {props.beers.filter(beer =>
          beer.id === props.id ? "I like it!" : "Don't Like"
        )} */}
        {/* {props.liked && props.id ? "I like it!" : "Don't Like"} */}
      </button>
    </li>
  );
}

export default Beer;
