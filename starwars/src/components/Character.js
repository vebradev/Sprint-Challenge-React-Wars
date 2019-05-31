import React from "react";

const Character = props => {
  return (
    <div className="character">
      <h2 className="name">{props.data.name}</h2>
      <p className="birth-year">{props.data.birth_year}</p>
      <p className="gender">{props.data.gender}</p>
      <p className="height">{props.data.height}</p>
      <p className="mass">{props.data.mass}</p>

      <ul className="films">
        {props.data.films.map(film => {
          return <li>{film}</li>;
        })}
      </ul>
    </div>
  );
};

export default Character;
