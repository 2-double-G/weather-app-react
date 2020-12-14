import React from "react";

export const Card = ({ dt, icon, temp, timezone }) => {
  const showDate = (dateTime) => {
    const options = { hour: "numeric" };
    const myShift = -new Date().getTimezoneOffset() / 60;
    const cityShift = timezone / 3600;

    return new Date(dateTime * 1000 - (myShift - cityShift) * 1000 * 3600)
      .toLocaleDateString("en-US", options)
      .split(",")[1];
  };

  return (
    <div className="card bg-transparent border-light p-2">
      <span>{showDate(dt)}</span>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather condition"
        />
      </div>
      <span>{Math.round(temp)}&deg;</span>
    </div>
  );
};
