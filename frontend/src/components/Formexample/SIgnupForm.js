import React from "react";
import { Formik, Form, useField } from "formik";
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

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  const [stri, setStri] = React.useState("");
  const StringProcessing = (vals) => {
    let totalAmount = vals.dealer * 9 + vals.pickup * 10;
    let striRes = `Dealer ${vals.dealer}x9=${vals.dealer * 9}, Pickup ${
      vals.pickup
    }x10=${vals.pickup * 10}, Total Amount : ${totalAmount}`;
    //navigator.clipboard.writeText(striRes);
    setStri(striRes);
  };

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          dealer: "",
          pickup: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          dealer: Yup.number().required("Required"),
          pickup: Yup.number().required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
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
          <MyTextInput
            label="dealer"
            name="dealer"
            type="number"
            placeholder="0"
          />

          <MyTextInput
            label="pickup"
            name="pickup"
            type="number"
            placeholder="0"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>

          <textarea
            type="textarea"
            rows="4"
            cols="50"
            value={stri}
            id="myInput"
          />
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
