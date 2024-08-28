import React, { useState, useEffect } from "react";

const StackedCards = ({ cards, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => clearInterval(timer);
  }, [cards.length, interval]);

  const activeCard = cards[activeIndex];

  return (
    <div
      className="flex items-center justify-center p-4"
      style={{ height: "10rem" }}
    >
      {/* Stacked Images */}
      <div className="relative w-1/2 h-full flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-40 h-full rounded-lg bg-cover bg-center transition-all duration-700 ease-in-out
            ${
              index === activeIndex
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-95 z-10"
            }`}
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
        ))}
      </div>

      {/* Card Details */}
      <div className="w-1/2 h-full flex items-center justify-center p-4 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {activeCard.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
