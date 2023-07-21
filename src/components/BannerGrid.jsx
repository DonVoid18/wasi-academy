import React from "react";
const banners = [
  "https://i.ibb.co/7b7TgXq/325876876-6363238940370607-2186950092791581815-n.jpg",
  "https://i.ibb.co/gSV69Bv/339745087-607882684221405-1026949857194512941-n.jpg",
  "https://i.ibb.co/yysNG7x/362245024-742141481253728-1024120233037463102-n.jpg",
];
const BannerGrid = () => {
  return (
    <div className="container mx-auto my-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 shadow-md"
        >
          <img
            src={banner}
            alt={`Noticia ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerGrid;
