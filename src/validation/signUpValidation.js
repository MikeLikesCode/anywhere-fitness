import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup.string().trim().required("You must enter in your name!"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(5, "Password must be greater than 5 characters!"),
  type: yup
  .string()
  .oneOf(["client", "instructor"]),
  authCode: yup
  .string()
  .trim()
  .oneOf(["instructor"])
  .when('type', {
      is: (type) => type === "instructor",
      then: yup.string()
      .required('Field is required')
  }),
});

export default FormSchema;
