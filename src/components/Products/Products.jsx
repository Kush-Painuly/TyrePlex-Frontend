import React from "react";
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import productLogo from "../../assets/Deal-1.PNG";
import tyreimg from '../../assets/img_main.jpg';
const Products = () => {
  return (
    <>
      <div>
        <h4 className="capaitalize text-4xl text-black font-bold py-8 text-center">
          Tyres Sold by the Dealer
        </h4>
        <div className="container mx-auto flex items-center justify-end gap-4 py-4">
          <div>
            <select name="filter" id="filter">
              <option value="" hidden>
                Filter By &#8595;
              </option>
              <option value="apollo">Apollo</option>
              <option value="bridgestone">Bridgestone</option>
              <option value="continental">Continental</option>
              <option value="goodyear">Goodyear</option>
            </select>
          </div>
          <div>
            <select name="popular" id="popular">
              <option value="" hidden>
                Most Popular &#8595;
              </option>
              <option value="hight">Price High to Low</option>
              <option value="low">Price Low to High</option>
            </select>
          </div>
          <div>
            <p className="text-blue-600 underline cursor-pointer">Advanced &#8595;</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 container mx-auto">
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 container mx-auto overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        <div
          className=" relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  overflow-hidden"
        >
          <div className="absolute mx-auto right-0 top-0 bg-amber-200 p-1 text-black">
            <ShieldIcon />
            <span>5 year Warranty</span>
          </div>
          <div className="mt-4 flex flex-col items-start justify-center gap-2">
            <div className="w-1/4">
              <img src={productLogo} alt="product-logo" className="w-100" />
            </div>
            <div>
              <h4 className="uppercase font-normal text-xl">amazer 4g life</h4>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-400">145/80 R12</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center bg-green-400 text-white py-1 px-2">
              <StarIcon />
              <span className="text-xl font-bold">4</span>
            </div>
            <div>
              <p className="underline text-gray-400">321 reviews</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center py-4 gap-4">
            <div>
              <p>&#8377; 3,136</p>
            </div>
            <div>
              <p className="text-green-400">Offer Available</p>
            </div>
            <div>
              <p className="text-gray-400">Tuber Type</p>
            </div>
          </div>
          <div className="absolute bottom-0 -right-12">
            <img src={tyreimg} alt="product-tyre" />
          </div>
        </div>
        </div>
      </div>
      <div className="text-center py-8">
        <button className="bg-transparent border border-orange-700 py-2 px-8 rounded-lg text-gray-800">View more &#8595;</button>
      </div>
    </>
  );
};

export default Products;
