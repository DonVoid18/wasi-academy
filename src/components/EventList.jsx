import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    title: "Conferencia de Robótica",
    date: "15 de abril de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Charla sobre Inteligencia Artificial",
    date: "28 de mayo de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Taller de Programación en Python",
    date: "12 de junio de 2023",
    location: "UNHEVAL",
    image: "https://via.placeholder.com/600x400",
  },
];

const EventList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.title}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventList;
