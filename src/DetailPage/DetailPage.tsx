import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!productDetails) {
    // You can show a loading state or handle the case where details are not available yet
    return <div>Loading...</div>;
  }

  const { image, category, title, description, price } = productDetails;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <Link to="/" className="text-gray-500 hover:text-gray-700 mb-4 block">
          Back to Home
        </Link>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <p className="leading-relaxed mt-7">
              {description}
            </p>
            <div className="flex mt-10">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button className="items-center flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
