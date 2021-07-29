import * as yup from "yup";

const FormSchema = yup.object().shape({
  username: yup
    .string()
    .email("Must be a valid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(5, "Password must be greater than 5 characters!"),
  role_name: yup
  .string()
  .oneOf(["client", "instructor"]),
  authCode: yup
  .string()
  .trim()
  .oneOf(["instructor"])
  .when('role_name', {
      is: (role_name) => role_name === "instructor",
      then: yup.string()
      .required('Field is required')
  }),
});

export default FormSchema;
