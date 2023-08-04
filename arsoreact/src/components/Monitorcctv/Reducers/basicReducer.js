export const initialState = {
  multiple: 1,
  date_monitored: '',
  cctvTime: '',
  dealer: 0,
  pickup: 0,
  rnd: 0,
  square: 0,
  squareSmall: 0,
  small: 0,
  dayparts: '',
  suspicious: '',
  radioOption: "dealer",
  dropSelectLocation :"talamban",
};
export const basicReducer = (state, action) => {
  switch (action.type) {
    case "incdec":
      return { ...state, ...action.val };
    case "changeRadio":
      return { ...state, radioOption: action.value };
    case "changeTextBox":
      return { ...state, ...action.value };
    case "loadData":
      return { ...state, ...action.dataToLoad};
    case "reset":
      document.getElementById("rdealer").checked = true;
      return initialState;
    default:
      return state;
  }
};

