import React from "react";
import review1 from "../../assets/review-1.png";
import review2 from "../../assets/review-2.png";
import review3 from "../../assets/review-3.png";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      img: review1,
      name: "Md Nasir",
      review:
        " Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your courteous, prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.",
      rating: 5,
    },
    {
      id: 2,
      img: review2,
      name: "Rohit Bhati",
      review:
        "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
      rating: 4,
    },
    {
      id: 3,
      img: review3,
      name: "Pradeep Kumar",
      review:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience.",
      rating: 5,
    },
  ];

  return (
    <>
      <h1 className="capitalize text-center text-3xl font-bold text-gray-900 mb-4">
        What are Customers Saying?
      </h1>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-wrap items-center justify-center gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-full md:w-1/2 lg:w-1/3 review-card bg-white rounded-lg shadow-lg p-4 mb-4 flex flex-col items-start"
          >
            <div className="flex items-center justify-start gap-4 mb-2">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 rounded-full"
              />
              <h2 className="text-lg font-bold text-gray-900">{review.name}</h2>
            </div>
            <p className="text-gray-600 mb-2">{`${review.review.slice(
              0,
              100
            )} ...`}</p>
            <div className="rating flex items-center">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index} className="text-yellow-400">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
