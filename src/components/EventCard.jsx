import React from "react";

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="transform overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
      <img
        className="h-56 w-full object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-4 py-3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base font-medium text-colorTextSecundary">
          {date} - {location}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
