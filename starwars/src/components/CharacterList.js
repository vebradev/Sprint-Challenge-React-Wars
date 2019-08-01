import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="list">
      {props.data.map(character => (
        <Character key={character.created} data={character} />
      ))}
    </div>
  );
};

export default CharacterList;
