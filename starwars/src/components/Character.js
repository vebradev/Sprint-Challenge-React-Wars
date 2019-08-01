import React from "react";

const Character = props => {
  return (
    <div className="character">
      <h2 className="name"><span>Name:</span> {props.data.name}</h2>
      <p className="birth-year"><span>Born:</span> {props.data.birth_year}</p>
      <p className="gender"><span>Gender:</span> {props.data.gender}</p>
      <p className="height"><span>Height:</span> {props.data.height}</p>
      <p className="mass"><span>Mass:</span> {props.data.mass}</p>

      <ul className="films">
        {props.data.films.map(film => {
          return <li>{film}</li>;
        })}
      </ul>
    </div>
  );
};

export default Character;
