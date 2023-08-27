import React, { useReducer, useEffect, useState } from "react";
import Radiobutton from "./Refcomponents/Radiobutton";
import Refbuttons from "./Refcomponents/Refbuttons";
import Dropselector from "./Refcomponents/Dropselector";
import { basicReducer, initialState } from "./Reducers/basicReducer";
import Refmultiple from "./Refcomponents/Refmultiple";
import { readOutLoud } from "./OtherFunctions/Readoutloud";
import { changeBodyColorTimeout } from "./OtherFunctions/Colorjs";
import Reftextboxes from "./Refcomponents/Reftextboxes";
import LoadButton from "./Refcomponents/LoadButton";
import axios from 'axios';
import SaveButton from "./Refcomponents/SaveButton";


function Refillingcc() {
  const [state, dispatch] = useReducer(basicReducer, initialState);
  const [urlSaveLocation, setUrlSaveLocation] = useState(state.dropSelectLocation);
  const [urlLoadLocation, setUrlLoadLocation] = useState(state.dropSelectLocation);

  const radioArray = ["dealer", "pickup", "round", "small", "square"];

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;
    let indix = radioArray.indexOf(state.radioOption);
    const radioEzSelector = (ind) => {
      let radiobtn = document.getElementById(`r${radioArray[indix]}`);
      radiobtn.checked = true;
      dispatch({ type: "changeRadio", value: radioArray[indix] });
    };
    if (keyCode === 13) {
      dispatch({ type: "incdec", val: handleRadioOptions(1) });
    } else if (keyCode == 109) {
      dispatch({ type: "incdec", val: handleRadioOptions(-1) });
    } else if (keyCode == 37) {
      //left
      if (indix == 0) {
        indix = radioArray.length - 1;
      } else {
        indix--;
      }
      radioEzSelector(radioArray[indix]);
    } else if (keyCode == 39) {
      //right
      if (indix == radioArray.length - 1) {
        indix = 0;
      } else {
        indix++;
      }
      radioEzSelector(radioArray[indix]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  useEffect (()=> {
    let urlSave = "";
    if (state.dropSelectLocation === "talamban") {
      setUrlSaveLocation(`${urlSave}/api/talambansave/`);
      setUrlLoadLocation("/api/talambanload/");
    } else if (state.dropSelectLocation === "labangon") {
      setUrlSaveLocation(`${urlSave}/api/labangonsave/`);
      setUrlLoadLocation("/api/labangonload/")
    } else if (state.dropSelectLocation === "kalimpio") {
      setUrlSaveLocation(`${urlSave}/api/kalimpiosave/`);
      setUrlLoadLocation("/api/kalimpioload/")
    }
    console.log(urlLoadLocation);
  }, [state.dropSelectLocation]);

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "multiple":
        if (e.target.value == "")
          dispatch({ type: "changeTextBox", value: { multiple: "1" } });
    }
  };

  const handleFocus = (e) => {
    switch (e.target.name) {
      case "multiple":
        if (e.target.value != "")
          dispatch({ type: "changeTextBox", value: { multiple: "" } });
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "multiple":
        dispatch({
          type: "changeTextBox",
          value: { multiple: parseInt(e.target.value) },
        });
        break;
      case "dealer":
        dispatch({
          type: "changeTextBox",
          value: { dealer: parseInt(e.target.value) },
        });
        break;
      case "pickup":
        dispatch({
          type: "changeTextBox",
          value: { pickup: parseInt(e.target.value) },
        });
        break;
      case "round":
        dispatch({
          type: "changeTextBox",
          value: { round: parseInt(e.target.value) },
        });
        break;
      case "small":
        dispatch({
          type: "changeTextBox",
          value: { small: parseInt(e.target.value) },
        });
        break;
      case "square":
        dispatch({
          type: "changeTextBox",
          value: { square: parseInt(e.target.value) },
        });
        break;
      case "date":
        dispatch({
          type: "changeTextBox",
          value: { date_monitored: e.target.value },
        });
        break;
      case "time-input":
        dispatch({
          type: "changeTextBox",
          value: { cctvTime: e.target.value },
        });
        break;
      case "selectlocations":
        console.log(`locations selected to ${e.target.value}`)
        dispatch({
          type: "changeTextBox",
          value: { dropSelectLocation: e.target.value },
        });
        break;
    }
  };

  const handleRadioOptions = (sign) => {
    let readString = "";
    readString += sign > 0 ? "Plus" : "Minus";
    readString += ` ${state.radioOption}`;
    readOutLoud(readString);
    changeBodyColorTimeout(sign > 0 ? "blue" : "red");
    switch (state.radioOption) {
      case "dealer":
        return {
          dealer: state.dealer + sign * state.multiple,
          multiple: 1,
        };
      case "pickup":
        return {
          pickup: state.pickup + sign * state.multiple,
          multiple: 1,
        };
      case "round":
        return {
          round: state.round + sign * state.multiple,
          multiple: 1,
        };
      case "small":
        return {
          small: state.small + sign * state.multiple,
          multiple: 1,
        };
      case "square":
        return {
          square: state.square + sign * state.multiple,
          multiple: 1,
        };
    }
  };

  const handleLoadClick = async (dateMonitored) => {
    try {
      const response = await axios.get(`${urlLoadLocation}${dateMonitored}/`);
      let dataToLoad = response.data;
      //delete dataToLoad.id;
      dispatch({ type: "loadData", dataToLoad: dataToLoad });
      console.log(dataToLoad)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const handleSaveClick = async (event) => {

    event.preventDefault();
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
    try {
      const response = await axios.post(`${urlSaveLocation}${state.date_monitored}/`, state);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <input type="date" name="date" id="date" value={state.date_monitored} onChange={handleChange} />
      <input type="time" id="time-input" name="time-input" value={state.cctvTime} onChange={handleChange} />
      <Dropselector state={state} handleSelect={handleChange} />
      <Refbuttons
        buttonsDispatch={dispatch}
        handleRadioOptions={handleRadioOptions}
      />
      <Radiobutton radioState={state} radioDispatch={dispatch} />
      <Refmultiple
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        Value={state.multiple}
        Handlechange={handleChange}
      />
      <Reftextboxes txtstate={state} handleChange={handleChange} state={state}  />

      <LoadButton class="btn btn-outline-info" type="button" id="loadBtn" state={state} handleLoadClick={handleLoadClick}>
        Load
      </LoadButton>
      <SaveButton class="btn btn-outline-info" type="button" id="saveBtn" handleSaveClick={handleSaveClick}>
        Save
      </SaveButton>
    </div>
  );
}

export default Refillingcc;
