import React, { useState } from "react";
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
  cursor: pointer;
`;

const initialFormValues = {
  eventName: "",
  eventType: "",
  startTime: "",
  duration: "",
  intensityLevel: "",
  eventLocation: "",
  maxClassSize: 0,
};

// const initialFormErrors = {
//   eventName: "",
//   eventType: "",
//   startTime: "",
//   duration: "",
//   intensityLevel: "",
//   eventLocation: "",
//   maxClassSize: "",
// };

export default function EventsForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  // Set Form Errors once Validation is avaliable
  //   const [formErrors, setFormErrors] = useState(initialFormErrors);

  function onChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    setFormValues(initialFormValues);
    console.log(formValues);
  }

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <label>Event Name</label>
          <input
            type="text"
            name="eventName"
            onChange={onChange}
          />
        </InputContainer>

        <InputContainer>
          <label>Event Type</label>
          <select
            onChange={onChange}
            value={formValues.eventType}
            name="eventType"
          >
            <option value="-- Select A Event --">-- Select A Event --</option>
            <option value="Weight Lifting">Weight Lifting</option>
            <option value="Yoga">Yoga</option>
            <option value="Zumba">Zumba</option>
            <option value="Cycling">Cycling</option>
          </select>
        </InputContainer>

        <InputContainer>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            onChange={onChange}
            value={formValues.startTime}
          />
        </InputContainer>

        <InputContainer>
          <label>Duration </label>
          <input
            type="time"
            name="duration"
            onChange={onChange}
            value={formValues.duration}
          />
        </InputContainer>

        <InputContainer>
          <label> Intensity Level </label>
          <select
            name="intensityLevel"
            onChange={onChange}
            value={formValues.intensityLevel}
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
            name="eventLocation"
            onChange={onChange}
            value={formValues.eventLocation}
          />
        </InputContainer>

        <InputContainer>
          <label>Max Class Size</label>
          <input
            type="number"
            onChange={onChange}
            value={formValues.maxClassSize}
            name="maxClassSize"
          />
        </InputContainer>

        <label>Current Number of Registered Attendees</label>
        <p>0</p>

        <SubmitButton type="submit"> Post Event </SubmitButton>
      </Form>
    </FormContainer>
  );
}
