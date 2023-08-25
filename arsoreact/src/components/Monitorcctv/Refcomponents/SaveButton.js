import React from "react";

function SaveButton(props) {
  return (
    <button className={props.class} type={props.type} onClick={props.handleSaveClick}>
      {props.children}
    </button>
  );
}

export default SaveButton;