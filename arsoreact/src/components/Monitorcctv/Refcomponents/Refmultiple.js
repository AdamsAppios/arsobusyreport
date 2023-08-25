const Refmultiple = ({ handleBlur, handleFocus, Value, Handlechange }) => {
  return (
    <div>
      Multiple:
      <input
        name="multiple"
        type="number"
        value={Value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={(e) => Handlechange(e)}
      />
    </div>
  );
};

export default Refmultiple;
