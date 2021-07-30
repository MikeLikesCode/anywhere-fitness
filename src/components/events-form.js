import axiosWithAuth from "../helpers/axiosWithAuth";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import ClassesContext from "../contexts/ClassesContext";
import axios from 'axios'

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
  cursor: pointer;
`;

const initialFormValues = {
  name: "",
  type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  max_size: 0,
  date: '',
};


export default function EventsForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const {events, setEvents} = useContext(ClassesContext)

  function onChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }


  function onSubmit(event) {
    event.preventDefault();

    // const fullFormValues = {
    //   ...formValues,
    //   number_registered: '0',

    // }
    
    axios
      .post(`https://anytime-fitness-unit4.herokuapp.com/classes`, formValues)
      .then(res => {
        console.log(res.data)
        setEvents(
          ...events,
          res.data
        )
        props.setIsHidden(true)
      })
      .catch(err => {
        console.log(err)
      })
    setFormValues(initialFormValues);
  }

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={formValues.name}
          />
        </InputContainer>

        <InputContainer>
          <label>Event Type</label>
          <select
            onChange={onChange}
            value={formValues.type}
            name="type"
          >
            <option value="-- Select A Event --">-- Select A Event --</option>
            <option value="Weight Lifting">Weight Lifting</option>
            <option value="Yoga">Yoga</option>
            <option value="Zumba">Zumba</option>
            <option value="Cycling">Cycling</option>
            <option value="Cardio">Cardio</option>
            <option value="Other">Other</option>

          </select>
        </InputContainer>

        <InputContainer>
          <label>Date  (example: Monday, July 1st) </label>
          <input 
            type='text' 
            name='date' 
            onChange={onChange} 
            value={formValues.date} 
          />
        </InputContainer>

        <InputContainer>
          <label>Start time? </label>
          <input
            type="text"
            name="start_time"
            onChange={onChange}
            value={formValues.start_time}
          />
        </InputContainer>

        <InputContainer>
          <label>Duration (min/hours) </label>
          <input
            type="text"
            name="duration"
            onChange={onChange}
            value={formValues.duration}
          />
        </InputContainer>

        <InputContainer>
          <label> Intensity Level </label>
          <select
            name="intensity_level"
            onChange={onChange}
            value={formValues.intensity_level}
          >
            <option value="-- Choose an Intensity --">
              {" "}
              -- Choose an Intensity --
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Intense">Intense</option>
          </select>
        </InputContainer>

        <InputContainer>
          <label> Event Location </label>
          <input
            type="text"
            name="location"
            onChange={onChange}
            value={formValues.location}
          />
        </InputContainer>

        <InputContainer>
          <label>Max Class Size</label>
          <input
            type="number"
            onChange={onChange}
            value={formValues.max_size}
            name="max_size"
          />
        </InputContainer>

        <SubmitButton type="submit"> Post Event </SubmitButton>
      </Form>
    </FormContainer>
  );
}
