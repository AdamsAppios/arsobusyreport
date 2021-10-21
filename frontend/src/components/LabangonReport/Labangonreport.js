import React, { useState, useEffect } from "react";

const refillReducer = (state, action) => {
  switch (action.type) {
    case "DEALER_CHANGED":
      return {
        ...state,
        dealer: action.payload.dealer,
        totalAmount:
          action.payload.dealer * state.dealerprice +
          state.pickup * state.pickupprice,
      };
    case "PICKUP_CHANGED":
      return {
        ...state,
        pickup: action.payload.pickup,
        totalAmount:
          action.payload.pickup * state.pickupprice +
          state.dealer * state.dealerprice,
      };
  }
};

const Labangonreport = () => {
  const [count, setCount] = useState(1);
  const [dealer, setDealer] = useState(0);
  const [refill, dispatchRefill] = React.useReducer(refillReducer, {
    dealer: 0,
    pickup: 0,
    small: 0,
    dealerprice: 10,
    pickupprice: 12,
    totalAmount: 0,
  });

  return <div></div>;
};

export default Labangonreport;
