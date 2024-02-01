import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { AddShoppingCart } from '@mui/icons-material';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Jewelry = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const addToCart = (productId: number) => {
    // Find the product with the matching ID
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      // Update the cart with the selected product
      setCart([...cart, selectedProduct]);
      // Redirect to the cart page
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover mb-4 rounded-md"
                />
              </Link>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <p className="text-gray-700 mb-4">
                  ${product.price}
                </p>
                <div className="flex items-center mb-2">
                  <p className="text-sm text-gray-500 mr-2">Rating:</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">&#9733;</span>
                    <span className="ml-1">{product.rating.rate} ({product.rating.count} reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded items-center"
                >
                  <AddShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jewelry;
