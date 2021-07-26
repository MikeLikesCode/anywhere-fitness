import React, { useState } from "react";

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


  function onChange(event){
    const {name,value} = event.target
    setFormValues({ ...formValues, [name] : value})
  }

  function onSubmit(event) {
    event.preventDefault();
    setFormValues(initialFormValues)
    console.log(formValues)
  }

  return (
    <div style={{ width: "40%", margin: "4vh auto" }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmit}
      >
        <label>Event Name</label>
        <input type="text" name="eventName" onChange={onChange} />

        <label>Event Type</label>
        <select onChange={onChange} value={formValues.eventType} name="eventType">
          <option value="-- Select A Event --">-- Select A Event --</option>
          <option value="Weight Lifting">Weight Lifting</option>
          <option value="Yoga">Yoga</option>
          <option value="Zumba">Zumba</option>
          <option value="Cycling">Cycling</option>
        </select>

        <label>Start Time</label>
        <input type="time" name="startTime" onChange={onChange} value={formValues.startTime}/>

        <label>Duration </label>
        <input type="time" name="duration" onChange={onChange} value={formValues.duration}/>

        <label> Intensity Level </label>
        <select name="intensityLevel" onChange={onChange} value={formValues.intensityLevel}>
          <option value="-- Choose an Intensity --">
            {" "}
            -- Choose an Intensity --
          </option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Intense">Intense</option>
        </select>

        <label> Event Location </label>
        <input type="text" name="eventLocation" onChange={onChange} value={formValues.eventLocation}/>

        <label>Max Class Size</label>
        <input type="number" onChange={onChange} value={formValues.maxClassSize} name="maxClassSize" />

        <label>Current Number of Registered Attendees</label>
        <p>0</p>

        <button type="submit"> Post Event </button>
      </form>
    </div>
  );
}
