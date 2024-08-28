import React from 'react';
import havequestionsBg from "../../assets/haveQuestion-bg.jpg";
import tplogo from "../../assets/TP-logo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='bg-amber-200 p-4 flex flex-col md:flex-row items-center justify-between'>
          <div className='flex flex-col items-start justify-center gap-4'>
            <h4 className='text-xl font-bold text-black'>Have any Questions about Tyres?</h4>
            <p className='text-gray-500'>Get an answer within 24 hours from our experts.</p>
            <input 
              type="text" 
              placeholder='Ask or search any questions' 
              className='rounded-full border-2 border-amber-200 w-full md:w-80 py-2 px-4' 
            />
          </div>
          <div className='mt-4 md:mt-0'>
            <img src={havequestionsBg} alt="Have Questions" className='w-full md:w-auto' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-b border-gray-200'>
          <div className='flex flex-col items-start gap-4'>
            <img src={tplogo} alt="TyrePlex Logo" className='w-24' />
            <div className='flex items-center gap-4'>
              <a href="#" aria-label="Facebook">
                <FacebookIcon sx={{fontSize: 33, color: 'gray'}} />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon sx={{fontSize: 33, color: 'gray'}} />
              </a>
            </div>
          </div>
          <div className='mt-4 md:mt-0'>
            <ul>
              <li className='pb-1'>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Who We Are</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Are You a Dealer?</a>
              </li>
            </ul>
          </div>
          <div className='mt-4 md:mt-0'>
            <ul>
              <li className='pb-1'>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Privacy Policy</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className='mt-4 md:mt-0'>
            <ul>
              <li className='pb-1'>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Contact Us</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Career</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Shipping & Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-gray-400 text-center py-4 text-sm'>
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
