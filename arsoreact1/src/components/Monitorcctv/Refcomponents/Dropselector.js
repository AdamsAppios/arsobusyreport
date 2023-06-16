import React from "react";

const Dropselector = ({state, handleSelect}) => {
  return (
    <div>
      <select name="selectlocations" id="selectlocations" value={state.dropSelectLocation} onChange={handleSelect}>
        <option value="talamban">Talamban</option>
        <option value="labangon">Labangon</option>
        <option value="kalimpio">Kalimpio</option>
      </select>
    </div>
  );
};

export default Dropselector;
