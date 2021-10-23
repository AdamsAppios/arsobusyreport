import React, { useEffect, useRef } from "react";
import { useField, useFormikContext } from "formik";

const MyField = (props) => {
  const {
    values: {
      date,
      dealer,
      pickup,
      small,
      container,
      CTO,
      ctaken,
      expenses,
      contend,
      capbeg,
      capend,
      duty,
    },
    touched,
    setFieldValue,
  } = useFormikContext();

  const inputEl = useRef(null);

  const StringProcessing = () => {
    let totalAmount = dealer * 9 + pickup * 10 + container * 150 + small * 5;
    let smallString = small > 0 ? `\nSmall : ${small}*5 = ${small * 5}` : "";
    let contString =
      container > 0 ? `\nCont ${container}x150=${container * 150}` : "";
    let contendString = contend > 0 ? `\n Container Ending: ${contend}` : "";
    let shortCapString =
      capbeg - capend - (dealer + pickup + container) > 0
        ? `= Short ug ${capbeg - capend - (dealer + pickup + container)}\n`
        : "";
    let capString = `\nCapseal beg: ${capbeg}, Capseal End:${capend} ${shortCapString}`;

    let totalexpenses = 0;
    try {
      expenses.split(",").map(function (x) {
        totalexpenses += parseFloat(x.match(/=(\d*\.?\d*)/)[1]);
      });
    } catch (err) {
      totalexpenses = 0;
    }
    let expString =
      expenses.length > 0
        ? `\nExpenses: ${expenses} \nTotal Expenses: ${totalexpenses || 0} `
        : "";
    let ctakenString = ctaken > 0 ? `\nCash taken ${ctaken}` : "";
    let ctoCalc = totalAmount - totalexpenses - ctaken;
    let ctoShort =
      CTO - ctoCalc >= 0
        ? `Over ug ${CTO - ctoCalc}\n`
        : `Short ug ${CTO - ctoCalc}\n`;
    let ctoString = `\nCTO ${CTO} , CTO Calculated ${ctoCalc} = ${ctoShort}`;
    let striRes = `Date: ${date}\nDealer ${dealer}x9=${
      dealer * 9
    }\nPickup ${pickup}x10=${
      pickup * 10
    }${smallString}${contString}${ctakenString}\nTotal Amount : ${totalAmount}${ctoString}${expString}${capString}\nDuty: ${duty}`;
    return striRes;
  };

  const copyCodeToClipboard = () => {
    const el = inputEl;
    el.current.select();
    document.execCommand("copy");
  };
  const [field, meta] = useField(props);

  useEffect(() => {
    setFieldValue(props.name, StringProcessing());
  }, [
    dealer,
    pickup,
    small,
    duty,
    container,
    CTO,
    ctaken,
    expenses,
    contend,
    capbeg,
    capend,
    touched.dealer,
    touched.pickup,
    touched.duty,
    touched.container,
    touched.expenses,
    touched.ctaken,
    touched.contend,
    touched.capbeg,
    touched.capend,
    touched.CTO,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      <label>
        Report Result:
        <br />
        <button onClick={() => copyCodeToClipboard()}>Copy</button>
        <textarea rows="10" cols="70" ref={inputEl} {...props} {...field} />
      </label>
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
export default MyField;
