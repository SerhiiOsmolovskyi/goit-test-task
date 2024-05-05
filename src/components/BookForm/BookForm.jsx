import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./BookForm.module.css";
import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";

import "./reactDatePicker.css";
import Button from "../Button/Button";

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
        <Form className={styles.bookFormContainer}>
          <div>
            <h3 className={styles.bookFormTitle}>Book your campervan now</h3>
            <p className={styles.bookFormText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={styles.fieldContainer}>
            <label className={styles.label} htmlFor="name">
              <Field
                className={styles.field}
                name="name"
                type="text"
                placeholder="Name"
              />
            </label>
            <ErrorMessage name="name" component="div" />
            <label className={styles.label} htmlFor="email">
              <Field
                className={styles.field}
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <ErrorMessage name="email" component="div" />
            <label className={styles.label} htmlFor="bookingDate">
              <Field className={styles.field} name="bookingDate">
                {({ form, field }) => {
                  return (
                    <DatePicker
                      className={styles.field}
                      {...field}
                      selected={field.value}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                      placeholderText={"Booking date"}
                      icon={<CiCalendar />}
                      showIcon={true}
                      calendarIconClassname={styles.calendarIcon}
                    />
                  );
                }}
              </Field>
            </label>

            <ErrorMessage name="bookingDate" component="div" />
            <label className={styles.label} htmlFor="comment">
              <Field
                className={styles.fieldTextArea}
                as="textarea"
                name="comment"
                type="text"
                placeholder="Comment"
              />
            </label>
            <ErrorMessage name="comment" component="div" />
          </div>
          <Button type={"submit"} text={"Send"} />
        </Form>
      </Formik>
    </>
  );
}
