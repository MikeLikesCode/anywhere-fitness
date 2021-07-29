import * as yup from 'yup'

const FormSchema = yup.object().shape({
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email address is required"),
    password: yup
    .string()
    .trim()
    .required("Password is required!")
    .min(5, "Password must be greater than 5 characters!")
})

export default FormSchema