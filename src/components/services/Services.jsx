import React from "react";
import wheelBalanceImg from "../../assets/car-wheel-balancing-services.jpg";
import wheelAlignmentImg from "../../assets/Wheel-Alignment-Mechanic.jpg";

const Services = () => {
  return (
    <div className="px-4 sm:px-8 py-4">
      <h1 className="text-center text-black font-bold py-4 text-5xl">
        Services We Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Wheel Balancing Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            className="h-auto w-full md:w-1/2 rounded-lg object-cover"
            src={wheelBalanceImg}
            alt="Wheel Balancing"
          />
          <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center gap-2 px-2">
            <p className="text-5xl font-bold py-2">Wheel Balancing</p>
            <p className="text-base">
              Ensure a smooth, vibration-free ride with our expert wheel
              balancing service, enhancing tire longevity and vehicle
              performance.
            </p>
            <button className="px-4 py-2 text-white bg-red-700 border border-red-700 rounded hover:bg-red-800">
              Book Now
            </button>
          </div>
        </div>

        {/* Wheel Alignment Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4">
          <img
            className="h-auto w-full md:w-1/2 rounded-lg object-cover"
            src={wheelAlignmentImg}
            alt="Wheel Alignment"
          />
          <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center gap-2 px-2">
            <p className="text-5xl font-bold py-2">Wheel Alignment</p>
            <p className="text-base">
              Achieve precise handling and optimal tire wear with our
              professional wheel alignment service, keeping your vehicle safe
              and road-ready.
            </p>
            <button className="px-4 py-2 text-white bg-red-700 border border-red-700 rounded hover:bg-red-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
