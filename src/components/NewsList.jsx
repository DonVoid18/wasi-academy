import React from "react";
import New from "./New";

const NewsList = ({ news }) => {
  const newsData = [];
  for (let i = 0; i < 6; i++) {
    newsData.push(news[i]);
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {newsData.map((newData) => (
        <New
          key={newData._id}
          title={newData.title}
          date={newData.published_date}
          location={newData.country}
          image={newData.media}
          link={newData.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
