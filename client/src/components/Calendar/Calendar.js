import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const NewDate = function () {
  const [date, setDate] = useState("");

  return (
    <>
      <Calendar
        onClickDay={(date) => {
          setDate(date);
        }}
      ></Calendar>
    </>
  );
};

export default withRouter(NewDate);
