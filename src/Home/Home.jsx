import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/banner/Slider";
import OverlappedCards from "../components/Deals/OverlappedCards";
import About from "../components/About/About";
import Services from "../components/services/Services";
import Reviews from "../components/Reviews/Reviews";
import Products from "../components/Products/Products";

import deal1 from "../assets/Deal-1.PNG";
import deal2 from "../assets/Deal-2.PNG";
import deal3 from "../assets/Deal-3.PNG";
import deal4 from "../assets/Deal-4.PNG";
import deal5 from "../assets/Deal-5.PNG";
import deal6 from "../assets/Deal-6.PNG";
import deal7 from "../assets/Deal-7.PNG";
import deal8 from "../assets/Deal-8.PNG";
import deal9 from "../assets/Deal-9.PNG";
import deal10 from "../assets/Deal-10.PNG";
import deal11 from "../assets/Deal-11.PNG";
import deal12 from "../assets/Deal-12.PNG";
import deal13 from "../assets/Deal-13.PNG";
import deal14 from "../assets/Deal-14.PNG";
import deal15 from "../assets/Deal-15.PNG";
import deal16 from "../assets/Deal-16.PNG";
import Payment from "../components/Payment/Payment";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const cards = [
    {
      image: deal1,
      title: 'Apollo',
    },
    {
      image: deal2,
      title: 'MRF',
    },
    {
      image: deal3,
      title: 'NANKANG - Find Your Way',
    },
    {
      image: deal4,
      title: 'Firestone',
    },
    {
      image: deal5,
      title: 'Falcon Tires',
    },
    {
      image: deal6,
      title: 'RalSon',
    },
    {
      image: deal7,
      title: 'UltraMile',
    },
    {
      image: deal8,
      title: 'Birla Tyres',
    },
    {
      image: deal9,
      title: 'Kenda',
    },
    {
      image: deal10,
      title: 'Metezeller',
    },
    {
      image: deal11,
      title: 'KumHo Tires',
    },
    {
      image: deal12,
      title: 'NEXEN',
    },
    {
      image: deal13,
      title: 'TVS Tyres',
    },
    {
      image: deal14,
      title: 'Ralco Tyres',
    },
    {
      image: deal15,
      title: 'Maruti',
    },
    {
      image: deal16,
      title: 'MRL Tyres',
    },

  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Slider />
      </div>
      <div className="h-40">
        <OverlappedCards cards={cards} interval={3000}  />
      </div>
      <div>
        <About />
      </div>
      <div className="container mx-auto p-12">
        <Services />
      </div>
      <div>
        <Reviews/>
      </div>
      <div>
        <Products/>
      </div>
      <div className="py-4 text-start px-20">
        <p className="text-gray-400">Home/ Tyre Dealer / Tyre Dealers Ghaziabad / SHREE HEMKUNT TYRES AND SERVICES</p>
      </div>
      <div className="py-6">
        <Payment />
      </div>
      <Footer />
    </>
  );
};

export default Home;
