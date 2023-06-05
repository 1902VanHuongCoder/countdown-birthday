import React from "react";

const Countdown = ({ data, name }) => {
  return (
    <div>
      <h1 className="font-medium"> Countdown {name}'s Birthday</h1>
      <div className="flex space-x-3 mt-2">
        <div className="day">{data.days} days</div>
        <div className="hour">{data.hours} hours</div>
        <div className="minute">{data.minutes} minutes</div>
        <div className="second">{data.seconds} seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
