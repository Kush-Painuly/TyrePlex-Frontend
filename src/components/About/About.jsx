import React from "react";
import slide1 from "../../assets/slider-1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const About = () => {
  return (
    <>
      <div className="relative z-10 w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat bg-about">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 sm:px-8">
          <div className="w-full mt-5 md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={slide1}
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start text-white px-4 sm:px-8 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              SHREE HEMKUNT TYRES AND SERVICES
            </h1>
            <p className="text-sm sm:text-lg">
              With 8+ years of experience in the industry. At Shree Hemkunt
              Tyres and Services, we are committed to providing top-quality tyre
              solutions and automotive services to ensure your vehicle runs
              smoothly and safely. With years of experience in the industry, we
              have built a reputation for excellence and reliability in
              Gurugram/Noida.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <button className="border border-red-600 bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-white font-medium rounded">
                Rate Us
              </button>
            </div>

            <div className="absolute bottom-2 left-0 bg-white border border-white rounded-md py-4 px-2 sm:py-8 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-evenly space-y-4 sm:space-y-0">
              <div className="w-full sm:w-5/12 flex items-center justify-start sm:justify-center gap-2">
                <LocationOnIcon
                  sx={{ color: "rgba(0,0,0,0.5)", fontSize: "2rem" }}
                />
                <p className="text-xs sm:text-sm text-gray-600">
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              <div className="w-full sm:w-5/12 flex items-center justify-start sm:justify-center gap-2">
                <AccessTimeIcon
                  sx={{ color: "rgba(0,0,0,0.5)", fontSize: "2rem" }}
                />
                <p className="text-xs sm:text-sm text-gray-600">
                  Open - Monday to Sunday - 10:00 AM to 8:00 PM
                </p>
              </div>
              <div className="w-full flex items-center justify-start sm:justify-center">
                <button className="border border-red-600 bg-transparent px-6 py-3 sm:px-8 sm:py-4 text-black font-medium rounded">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
