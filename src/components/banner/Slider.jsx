import React, { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import GradeIcon from "@mui/icons-material/Grade";
const Slider = () => {
  const [review, setReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setReview((prev) => {
        if (prev < 2278) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="pt-16 relative bg-hero bg-no-repeat bg-cover bg-center w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-center fade">
          <div className=" text-center">
            <h1 className="text-4xl text-white font-bold leading-snug">
              Unleash the Power of Performance <br /> - Your Trusted Tyre
              Experts
            </h1>
          </div>

          <div className="absolute bottom-3 flex items-center justify-between gap-2">
            <div className="text-center">
              <VerifiedIcon className="text-5xl text-green-400" />
              <span className="block text-xs text-gray-400">
                Google Verified
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 text-center">
              <div>
                <GradeIcon className="text-yellow-300 text-5xl" />
              </div>
              <div>
                <GradeIcon className="text-yellow-300 text-5xl" />
              </div>
              <div>
                <GradeIcon className="text-yellow-300 text-5xl" />
              </div>
              <div>
                <GradeIcon className="text-yellow-300 text-5xl" />
              </div>
              <div>
                <GradeIcon className="text-yellow-300 text-5xl" />
              </div>
              <span className="block w-full text-xs text-gray-400">
                Top Rating
              </span>
            </div>
            <div className="text-center">
              <p className="text-white text-4xl font-bold">{review}</p>
              <span className="block text-xs text-gray-400">
                Quality reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
