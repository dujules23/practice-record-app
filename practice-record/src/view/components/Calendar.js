import React, { useState } from "react";
import * as dateFns from "date-fns";

import './Calendar.css';
import PointDashboard from "./PointDashboard";
import DateModal from './DateModal';


function Calendar () {
  //Possible hook 
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    
    return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={() => prevMonth()}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>
          {dateFns.format(currentMonth, dateFormat)}
        </span>
      </div>
      <div className="col col-end" onClick={() => nextMonth()}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = dateFns.startOfWeek(currentMonth);
    
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
    );
  }
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    // const { currentMonth, selectedDate }  = useState(new Date());
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`col cell ${
            !dateFns.isSameMonth(day, monthStart)
            ? "disabled"
            : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
          }`}
        key={day}
        onClick={() => onDateClick(dateFns.parse(cloneDay, "yyyy-MM-dd", new Date()))}
      >
        <span className="number">{formattedDate}</span>
        <span className="bg">{formattedDate}</span>
      </div>
    );
      day = dateFns.addDays(day, 1);
  }
  rows.push(
    <div className="row" key={day}>
      {days}
    </div>
  );
  days = [];
  }
  return <div className="body">{rows}</div>;
};



  const onDateClick = () => {
    setSelectedDate(selectedDate)
    console.log("this is working Correctly")
    return (
      <DateModal />
    )
  };

  const nextMonth = () => {
    setCurrentMonth(
      dateFns.addMonths(currentMonth, 1)
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      dateFns.subMonths(currentMonth, 1)
    );
  };

  return(
    <div>
      <div className="calendar">
        {renderHeader()}
        {renderDays()}
        {renderCells(() => onDateClick())}
      </div>
      <PointDashboard />
    </div>
  )
};



export default Calendar;