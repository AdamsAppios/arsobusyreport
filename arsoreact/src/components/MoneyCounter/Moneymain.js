import Tabs from "../Tabsreact/components/Tabs";
import Bills from "./Bills";
import Coins from "./Coins";
import { useReducer } from "react";
import { initialCoinsState, coinsReducer } from "./Reducers/Coinsreducer";
import { initialBillState, billreducer } from "./Reducers/Billreducers";

const Moneymain = () => {
  const [state, dispatch] = useReducer(coinsReducer, initialCoinsState);
  const [bstate, bdispatch] = useReducer(billreducer, initialBillState);

  return (
    <div>
      <h1>Money Counter</h1>
      <Tabs>
        <div label="Billcounter">
          <Bills state={bstate} dispatch={bdispatch} />
        </div>
        <div label="Coincounter">
          <Coins state={state} dispatch={dispatch} />
        </div>
        <div label="Sarcosuchus">
          <div> To be decided </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Moneymain;
