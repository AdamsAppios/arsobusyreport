const Coinavbar = ({ handleTextChange, handleSetMultiple, state }) => {
  return (
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <span class="navbar-text">Count:</span>
      <div class="input-group-sm">
        <input
          class="form-control"
          type="text"
          size="5"
          id="totalCount"
          name="totalCount"
          onChange={(e) => handleTextChange(e)}
          value={state.largeButton}
        />
      </div>
      <span class="navbar-text">Multiple:</span>
      <div class="input-group-sm">
        <input
          class="form-control"
          type="text"
          size="5"
          name="multiple"
          id="multiple"
          onChange={(e) => handleTextChange(e)}
          value={state.multiple}
        />
      </div>
      <button
        type="button"
        class="btn btn-success btn-sm"
        id="left"
        onClick={handleSetMultiple}
        name="btnleft"
      >
        &lt;&lt;
      </button>
      <button
        type="button"
        class="btn btn-success btn-sm"
        id="right"
        name="btnright"
        onClick={handleSetMultiple}
      >
        &gt;&gt;
      </button>
      <button
        type="button"
        class="btn btn-success btn-sm"
        id="clearCnt"
        name="reset"
        onClick={handleSetMultiple}
      >
        CLR
      </button>
    </nav>
  );
};

export default Coinavbar;
