const Radiobutton = ({ radioState, radioDispatch }) => {
  const onChangeValue = (event) => {
    console.log(`changed to ${event.target.value}`);
    radioDispatch({ type: "changeRadio", value: event.target.value });
  };
  return (
    <div onChange={onChangeValue}>
      <input type="radio" id="rdealer" name="radyo" value="dealer" checked={radioState.radioOption === 'dealer'}/>
      <label for="html">Dealer</label>
      &nbsp;
      <input type="radio" id="rpickup" name="radyo" value="pickup" />
      <label for="css">Pickup</label>
      &nbsp;
      <input type="radio" id="rround" name="radyo" value="round" />
      <label for="javascript">Round</label>
      &nbsp;
      <input type="radio" id="rsmall" name="radyo" value="small" />
      <label for="javascript">Small</label>
      &nbsp;
      <input type="radio" id="rsquare" name="radyo" value="square" />
      <label for="javascript">Square</label>
    </div>
  );
};

export default Radiobutton;
