import React, { useEffect } from "react";
import Countdown from "./Countdown";
import { useState } from "react";
import { Link } from "react-router-dom";
const Birthday = ({ day, month, name }) => {
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthDay: false,
  });

  if (day === undefined || month === undefined || name === undefined) {
    day = 7;
    month = 6;
    name = "Paul To";
  }
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let isBirthDay =
    currentTime.getMonth() === month && currentTime.getDay() === day;
  useEffect(() => {
    setInterval(() => {
      let time = new Date();
      let birthdayDay = new Date(currentYear, month - 1, day);
      let currentYearBirthday;
      if (time > birthdayDay) {
        currentYearBirthday = new Date(currentYear + 1, month - 1, day);
      } else {
        currentYearBirthday = new Date(currentYear, month - 1, day);
      }

      let remainingTime = currentYearBirthday.getTime() - time.getTime();

      let seconds = Math.floor(remainingTime / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      setState((state) => ({
        ...state,
        seconds,
        minutes,
        hours,
        days,
        isBirthDay,
      }));
    }, 1000);
  }, [month, day, currentYear, isBirthDay]);
  let userBirthdayMonth = months[month - 1];
  return (
    <div className="bg-slate-100 p-5 space-y-2">
      <Countdown data={state} name={name} />
      {!state.isBirthDay && (
        <div className="your-birthday-day">
          Your Birthday is: {day} {userBirthdayMonth} {currentYear}
          <div className="shadow-lg mt-2 w-fit h-fit bg-sky-400 p-2 rounded-2xl text-white font-bold">
            <Link to="/generate">Generate Link</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Birthday;
