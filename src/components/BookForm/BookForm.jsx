import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

export default function BookForm() {
  return (
    <>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          window.location.reload();
        }}
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, "Your name is too short").required(),
          email: Yup.string().email("Put your real email pls!").required(),
          bookingDate: Yup.date().required(),
          comment: Yup.string(),
        })}
      >
        <Form>
          <label htmlFor="name">
            <Field name="name" type="text" />
          </label>
          <ErrorMessage name="name" component="div" />
          <label htmlFor="email">
            <Field name="email" type="email" />
          </label>
          <ErrorMessage name="email" component="div" />
          <label htmlFor="bookingDate">
            <Field name="bookingDate" type="date" />
          </label>
          <ErrorMessage name="bookingDate" component="div" />
          <label htmlFor="comment">
            <Field as="textarea" name="comment" type="text" />
          </label>
          <ErrorMessage name="comment" component="div" />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </>
  );
}
