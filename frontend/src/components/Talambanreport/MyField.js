import React, { useEffect } from "react";
import { useField, useFormikContext } from "formik";
const MyField = (props) => {
  const {
    values: { date, dealer, pickup, container, CTO, expenses, duty },
    touched,
    setFieldValue,
  } = useFormikContext();
  const StringProcessing = () => {
    let totalAmount = dealer * 9 + pickup * 10 + container * 150;
    let contString = container > 0 ? `\nCont ${container}` : "";
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
        ? `Expenses: ${expenses} \nTotal Expenses ${totalexpenses || 0} `
        : "";
    let striRes = `Date: ${date}\nDealer ${dealer}x9=${
      dealer * 9
    }\nPickup ${pickup}x10=${
      pickup * 10
    }${contString}\nTotal Amount : ${totalAmount}\nCTO ${CTO}\n${expString}\nDuty ${duty}`;
    return striRes;
  };
  const [field, meta] = useField(props);

  useEffect(() => {
    setFieldValue(props.name, StringProcessing());
  }, [
    dealer,
    pickup,
    duty,
    container,
    CTO,
    expenses,
    touched.dealer,
    touched.pickup,
    touched.duty,
    touched.container,
    touched.expenses,
    touched.CTO,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      <label>
        Report Result:
        <br />
        <textarea rows="10" cols="50" {...props} {...field} />
      </label>
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
export default MyField;
