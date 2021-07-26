import React, { useState, useEffect } from "react";

export default function eventsForm(props) {
  return (
    <div>
      <form>
        <label>Event Name</label>
        <input name="event-name"/>

        <label>Event Type</label>
        <input name="event-type"/>

        <label>Start Time</label>
        <input name="start-time"/>

        <label>Duration </label>
        <input name="event-duration" />

        <label> Intensity Level </label>
        <input name="intensity-level" />

        <label> Event Location </label>
        <input name="event-location" />

        <label>Current Number of Registered Attendees</label>
        <input name="registered-attendees"/>
      </form>
    </div>
  );
}
