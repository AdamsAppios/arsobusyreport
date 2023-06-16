import React from "react";

const Numfield = ({label, name, type, placeholder, handleFieldChange}) => {
  const handleFocusString = (e) => {
    e.target.value='';
    dispatch({ type: e.target.name, payload: value || '' });
  };

  const handleBluString = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value || "" });
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleFieldChange}
        onFocus={handleFocusString}
        onBlur={handleBluString}
      />
      <br />
    </>
  );
}

export default Numfield;