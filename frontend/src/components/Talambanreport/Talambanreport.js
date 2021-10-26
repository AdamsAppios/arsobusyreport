import React, { useState, useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import MyField from "./MyField";
import * as Yup from "yup";
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Talambanreport = () => {
  return (
    <>
      <h1>Talamban Report</h1>
      <Formik
        initialValues={{
          date: new Date().toISOString().slice(0, 10),
          dealer: "",
          pickup: "",
          small: "",
          container: "",
          expenses: "",
          ctaken: "",
          CTO: "",
          contend: "",
          capbeg: "",
          capend: "",
          TDS: "",
          duty: "",
        }}
        validationSchema={Yup.object({
          date: Yup.date(),
          dealer: Yup.number(),
          pickup: Yup.number(),
          small: Yup.number(),
          container: Yup.number(),
          expenses: Yup.string().max(250, "Must be 250 characters or less"),
          ctaken: Yup.number(),
          CTO: Yup.number(),
          contend: Yup.number(),
          capbeg: Yup.number(),
          capend: Yup.number(),
          TDS: Yup.number(),
          duty: Yup.string().max(240, "Must be 240 characters or less"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            StringProcessing(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <button type="reset">Erase All</button>
          <br />
          <MyTextInput label="date" name="date" type="date" />
          <br />
          <MyTextInput
            label="dealer"
            name="dealer"
            type="number"
            placeholder="0"
          />
          <br />
          <MyTextInput
            label="pickup"
            name="pickup"
            type="number"
            placeholder="0"
          />
          <br />
          <MyTextInput
            label="small"
            name="small"
            type="number"
            placeholder="0"
          />
          <br />
          <MyTextInput
            label="container"
            name="container"
            type="number"
            placeholder="0"
          />
          <br />
          <MyTextInput
            label="expenses"
            name="expenses"
            type="text"
            size="90"
            placeholder="Example: Load=100, Sweldo Juan=2000, CA Juan=500"
          />
          <br />
          <MyTextInput
            label="Cash Taken"
            name="ctaken"
            type="number"
            placeholder=""
          />
          <br />
          <MyTextInput label="CTO" name="CTO" type="number" placeholder="" />
          <br />
          <MyTextInput
            label="Container Ending"
            name="contend"
            type="number"
            placeholder=""
          />
          <br />
          <MyTextInput
            label="Capseal Beg"
            name="capbeg"
            type="number"
            placeholder=""
          />
          <br />
          <MyTextInput
            label="Capseal End"
            name="capend"
            type="number"
            placeholder=""
          />
          <br />
          <MyTextInput label="TDS" name="tds" type="number" placeholder="Pilay TDS" />
          <br />
          <MyTextInput
            label="Duty"
            name="duty"
            type="text"
            size="50"
            placeholder="Example: Aljohn, Renanty, Christian"
          />
          <br />
          <MyField name="reportResult" />
        </Form>
      </Formik>
    </>
  );
};

export default Talambanreport;
