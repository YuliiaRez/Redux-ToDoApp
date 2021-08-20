import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { createTask } from "../../actions";
import TODO_SCHEMA from "../../utils/validatingSchema";
// import s from "../../pages/TodoPage/TodoPage.module.scss";

function TaskForm(props) {
  const { createTaskAction } = props;

  const initialTaskValues = {
    taskBody: "",
  };
  const submitHandler = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialTaskValues}
        onSubmit={submitHandler}
        validationSchema={TODO_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form>
              <Field name="taskBody" placeholder="Load yourself" type="text" />
              <ErrorMessage name="body" component="p" />
              <button type="submit">DIY </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    createTaskAction: (data) => {
      dispatch(createTask(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
