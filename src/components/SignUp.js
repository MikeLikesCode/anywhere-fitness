import React, { useState, useEffect} from "react";
import * as yup from "yup";
import { useHistory } from "react-router";
import FormSchema from "../validation/signUpValidation";
import styled from "styled-components";
import axios from 'axios';
import axiosWithAuth from "../helpers/axiosWithAuth";

const FormContainer = styled.div`
  width: 40%;
  margin: 6vh auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  position: relative;
  height: 60px;
  margin: 10px 0;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  input,
  select,
  input[type="time"] {
    width: 100%;
    height: 100%;
    color: #111;
    margin: 10px 0;
    border: none;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
    pointer-events: none;
    border-bottom: 1px solid #000;
  }
`;

const SubmitButton = styled.button`
  outline: 0;
  background-color: transparent;
  border: 1px solid black;
  padding: 5px 0px;
  font-size: 1rem;
  width: 20%;
  margin: 4vh auto;
  border-radius: 1px;
`;

const initialFormValues = {
  username: "",
  password: '',
  role_name: "client",
};

const initialFormErrors = {
  username: "",
  password: "",
};

function SignUp(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const history = useHistory();

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors }));
  };

  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  }


  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
        .post("https://anytime-fitness-unit4.herokuapp.com/register", formValues)
        .then(res => {
            // console.log('submit', res.data.token)
            localStorage.setItem('token', res.data.token);
            history.push("/tutorial")
        })
        .catch ((err)=>{
            console.log('submit', err);
        })
  };

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) =>{
      valid ? setDisabled(false) : setDisabled(true)
    });
  }, [formValues]);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>

      <h3>Sign Up for Your Account</h3>

        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>

        <InputContainer>
          <label>Email</label>
          <input
            type="email"
            name="username"
            value={formValues.username}
            onChange={onChange}
            required="required"
          />
        </InputContainer>

        <InputContainer>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            required="required"
          />
        </InputContainer>

        {formValues.role_name !== "client" ? (
          <InputContainer>
            <label>Auth Code </label>
            <input type="text" onChange={onChange} name="authCode" />
          </InputContainer>
        ) : null}

        <div>
          <label>Client</label>
          <input
            value="client"
            type="radio"
            name="role_name"
            onChange={onChange}
            checked={formValues.role_name === "client" ? true : false}
          />
          <label>Instructor</label>
          <input
            value="instructor"
            type="radio"
            name="role_name"
            onChange={onChange}
            checked={formValues.role_name === "instructor" ? true : false}
          />
        </div>
        <SubmitButton type="submit" disabled={disabled}>
          {" "}
          Sign Up{" "}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}
export default SignUp;
