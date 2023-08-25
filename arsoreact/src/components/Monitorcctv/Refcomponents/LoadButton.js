import React from "react";

function LoadButton(props) {
  return (
    <button className={props.class} type={props.type} onClick={()=>props.handleLoadClick(props.state.date_monitored)}>
      Load
    </button>
  );
}

export default LoadButton;