const Refbuttons = ({ buttonsDispatch, handleRadioOptions }) => {
  return (
    <div>
      <button
        onClick={() =>
          buttonsDispatch({ type: "incdec", val: handleRadioOptions(1) })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          buttonsDispatch({ type: "incdec", val: handleRadioOptions(-1) })
        }
      >
        Decrement
      </button>
      <button onClick={() => buttonsDispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Refbuttons;
