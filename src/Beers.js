import React from "react";
import Beer from "./Beer";

function Beers(props) {
  return (
    <ul className="beers">
      {props.beers.map(({ id, name, image_url }) => (
        <Beer
          text={props.text}
          beers={props.beers}
          liked={props.liked}
          likeBeer={props.likeBeer}
          key={id}
          id={id}
          name={name}
          image={image_url}
        />
      ))}
    </ul>
  );
}

export default Beers;
