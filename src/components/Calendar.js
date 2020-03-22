import React from "react";
import CalendarCell from "../containers/CalendarCell";

const days = [
  { name: "Пн", value: 1 },
  { name: "Вт", value: 2 },
  { name: "Ср", value: 3 },
  { name: "Чт", value: 4 },
  { name: "Пт", value: 5 },
  { name: "Сб", value: 6 },
  { name: "Вс", value: 0 }
];

const times = [
    {name: '10:00 - 11:30'},
    {name: '11:30 - 13:00'},
    {name: '13:00 - 14:30'},
    {name: '14:30 - 16:00'},
    {name: '16:30 - 18:00'},
    {name: '18:00 - 19:30'},
    {name: '19:30 - 20:00'},
]
const Calendar = ({schedules}) => (
  <div className="calendar">
    <div className="row">
        <div className="cell time"/>
        {days.map(day => (
            <div key={day.value} className="cell">
                <p>{day.name}</p>
            </div>
        ))}
    </div>
    {times.map((time, index)=> (
        <div key={index} className="row">
            <div className="cell time">
                <p>{time.name}</p>
            </div>
            {days.map(day => (
                <div key={index + day.value} className="cell">
                    <CalendarCell time={time.name} day={day.value}/>
                </div>
            ))}
        </div>
    ))}
  </div>
);

export default Calendar;
