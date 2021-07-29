import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import FormSchema from "../validation/signInValidation";
import * as yup from "yup";
import styled from "styled-components";

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

const initialFormErrors = {
  username: "",
  password: "",
};

export default function SignIn() {

  const [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
  });
  const [wrongCredentials, setWrongCredentials] = useState({
      error: ''
  })

  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors }));
  };

  const history = useHistory();

  const onChange = (evt) => {
    evt.persist();
    const { name, value } = evt.target;
    let newUserAccount = {
      ...userAccount,
      [name]: value,
    };
    validate(name, value);
    setUserAccount(newUserAccount);
    setWrongCredentials({
        error: ''
    })
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
        .post("https://anytime-fitness-unit4.herokuapp.com/login", userAccount)
        .then(res => {
            console.log('submit', res.data.token)
            localStorage.setItem('token', res.data.token);
            history.push("/dashboard");
        })
        .catch ((err)=>{
            setWrongCredentials({
                error: 'Uh oh... wrong username/password. Please try again. But right this time.'
            })
        })
  };

  useEffect(() => {
    FormSchema.isValid(userAccount).then((valid) =>
      valid ? setDisabled(false) : setDisabled(true)
    );
  }, [userAccount]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h3>Sign Into Your Account</h3>

        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{wrongCredentials.error}</div>

        <div id="login">
          <InputContainer>
            <label>Email: </label>
            <input type="email" name="username" onChange={onChange} required />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              onChange={onChange}
              required
            />
          </InputContainer>

          <div id="logInButton">
            <SubmitButton type="submit" disabled={disabled}> Log In </SubmitButton>
          </div>
        </div>
      </Form>
    </FormContainer>
  );
}