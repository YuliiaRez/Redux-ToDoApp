import * as yup from "yup";

const TODO_SCHEMA = yup.object().shape({
  body: yup.string().min(1).max(200).required(),
});
export default TODO_SCHEMA;
