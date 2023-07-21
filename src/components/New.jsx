import React from "react";

const New = ({ title, date, location, image, link }) => {
  return (
    <div className="transform overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105">
      <a href={link} target="_blank">
        <img
          className="h-56 w-full object-cover object-center"
          src={image}
          alt={title}
        />
      </a>
      <div className="px-4 py-3">
        <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
        <p className="text-base font-medium text-colorTextSecundary">
          {date} - {location}
        </p>
      </div>
    </div>
  );
};

export default New;
