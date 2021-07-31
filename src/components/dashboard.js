import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth";
import React, { useState, useEffect } from "react";
import EventPanel from "./eventPanel";
import EventsForm from "./events-form";
import styled from 'styled-components'
import ClassesContext from "../contexts/ClassesContext";

const Search = styled.input`
  width: 250px;
  padding: 5px;
  margin-right: 15px;
`;

function Dashboard() {
  const [isHidden, setIsHidden] = useState(true);
  const [events, setEvents] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function toggleForm() {
    setIsHidden(!isHidden);
    document.querySelector(".event-form").classList.toggle("hidden");
    document.querySelector(".add-cta").classList.toggle("hidden");
    document.querySelector(".create-event").classList.toggle("hidden");
  }

  function cancelForm() {
    setIsHidden(true);
    document.querySelector(".event-form").classList.add("hidden");
    document.querySelector(".add-cta").classList.remove("hidden");
    document.querySelector(".create-event").classList.remove("hidden");
  }

  const instructor = () => {
    if (localStorage.getItem("role") === 2) {
      document.querySelector(".add-event").classList.add("hidden");
    }
  };

  useEffect(() => {
    instructor();
    axiosWithAuth()
      .get("/classes")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setSearchValue(value);
  };

  const handleSubmit = () => {};

  return (
    <div className="dashboard">
      <ClassesContext.Provider value={{ events, setEvents }}>
        <div className="add-event">
          <div className="add-cta">
            <h3>Add a new event?</h3>
          </div>
          <button className="create-event" onClick={toggleForm}>
            Create Event!
          </button>
          <div className="event-form hidden">
            <EventsForm setIsHidden={setIsHidden} />
            <button onClick={cancelForm}>Cancel</button>
          </div>
        </div>
        <div className="choose">
          <h2>Choose your event!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Search
            name="search"
            placeholder="Search for event here..."
            onChange={handleChange}
          />
        </form>
        <div className="event-list">
          {events.filter(value => value.name.includes(searchValue)).map((item) => {
            return <EventPanel key={Math.random()} event={item} />;
          })}
        </div>
      </ClassesContext.Provider>
    </div>
  );
}

export default Dashboard;
