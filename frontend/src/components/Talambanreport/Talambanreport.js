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
          container: "",
          expenses: "",
          CTO: "",
          duty: "",
        }}
        validationSchema={Yup.object({
          date: Yup.date(),
          dealer: Yup.number().required("Required"),
          pickup: Yup.number(),
          container: Yup.number(),
          expenses: Yup.string().max(250, "Must be 250 characters or less"),
          CTO: Yup.number(),
          duty: Yup.string()
            .max(240, "Must be 240 characters or less")
            .required("Required"),
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
            label="container"
            name="container"
            type="text"
            placeholder="0"
          />
          <br />
          <MyTextInput
            label="expenses"
            name="expenses"
            type="text"
            size="50"
            placeholder="Example: Load=100, Pliti Dina=40, Sweldo=2000"
          />
          <br />
          <MyTextInput label="CTO" name="CTO" type="text" placeholder="" />
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
