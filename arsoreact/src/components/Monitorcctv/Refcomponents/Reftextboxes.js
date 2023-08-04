const Reftextboxes = ({ txtstate, handleChange }) => {
  return (
    <div>
      Dealer
      <input
        name="dealer"
        type="number"
        value={txtstate.dealer}
        onChange={handleChange}
      />
      <br />
      Pickup
      <input
        name="pickup"
        type="number"
        value={txtstate.pickup}
        onChange={handleChange}
      />
      <br />
      Round
      <input
        name="round"
        type="number"
        value={txtstate.rnd}
        onChange={handleChange}
      />
      <br />
      Small
      <input
        name="small"
        type="number"
        value={txtstate.small}
        onChange={handleChange}
      />
      <br />
      Square
      <input
        name="square"
        type="number"
        value={txtstate.square}
        onChange={handleChange}
      />
      <br />
      <span class="input-group-text" id="">
        Suspicion
      </span>
      <textarea id="suspectText" cols="100" rows="14"></textarea>
      <br />
    </div>
  );
};

export default Reftextboxes;
