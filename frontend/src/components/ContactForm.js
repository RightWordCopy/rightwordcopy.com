import { ErrorMessage, Field, Form, Formik, useField } from "formik"
import { navigate } from "gatsby"
import _isEmpty from "lodash.isempty"
import React from "react"
import * as Yup from "yup"
const MyTextInput = ({ ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={`form__form-group ${meta.error ? `has-error` : ""}`}>
      <label className="form__form-label" htmlFor={props.id || props.name}>
        {props.label}
      </label>
      <Field {...props} />
      <small className="error-msg">
        <ErrorMessage name={props.name} />
      </small>
    </div>
  )
}
const encodeFormData = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .min(3, "Too short")
    .max(30, "Too long"),
  business: Yup.string(),
  website: Yup.string().url("Please enter a valid URL"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().max(10).min(7),
  message: Yup.string()
    .required("Required")
    .min(15, "Message is too short!")
    .max(500, "Message is too long.")
    .trim(),
})

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        business: "",
        website: "https://",
        email: "",
        phone: "",
        message: "",
      }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        // make async call
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeFormData({ "form-name": "contact-form", ...data }),
        })
          .then(() => navigate("/thank-you", { replace: true }))
          .catch(error =>
            alert(
              "Oops... Someting went wrong. Please contact us with this error message: " +
                error
            )
          )

        resetForm()
        setSubmitting(false)
      }}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, errors, touched }) => {
        return (
          <Form
            className="form"
            id="contact-form"
            name="contact-form"
            data-netlify="true"
            netlify-honeypot="bot-field"
            method="POST"
          >
            <MyTextInput
              id="name"
              name="name"
              label="Full Name"
              type="text"
              values={values.name}
              placeholder="Full Name"
            />
            <MyTextInput
              id="business"
              name="business"
              label="Business Name"
              type="text"
              values={values.business}
              placeholder="Business Name"
            />
            <MyTextInput
              id="website"
              name="website"
              label="Website"
              type="text"
              values={values.website}
              placeholder="Please enter your website"
            />
            <MyTextInput
              id="email"
              name="email"
              label="Email"
              type="email"
              values={values.email}
              placeholder="Please enter a valid email"
            />
            <MyTextInput
              id="phone"
              name="phone"
              label="Phone"
              type="text"
              values={values.phone}
              placeholder="Please enter a valid contact number"
            />
            <MyTextInput
              id="message"
              name="message"
              as="textarea"
              rows="7"
              label="Message"
              type="text"
              values={values.message}
              placeholder="Please leave a brief description of the scope of your project."
            />
            <button
              className={
                isSubmitting || !_isEmpty(errors)
                  ? "disabled submit cta__button"
                  : "submit cta__button"
              }
              type="submit"
              disabled={isSubmitting || !_isEmpty(errors)}
            >
              Send
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ContactForm
