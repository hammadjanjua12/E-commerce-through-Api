import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface NavigationProps {
  cartCount: number;
}

const Navigation: React.FC<NavigationProps> = ({ cartCount }) =>  {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/jewelry" className="mr-5 hover:text-gray-900">Jewelry</Link>
          <Link to="/electronics" className="mr-5 hover:text-gray-900">Electronic</Link>
          <Link to="/mens-fashion" className="mr-5 hover:text-gray-900">Mens Fashion</Link>
          <Link to="/womens-fashion" className="mr-5 hover:text-gray-900">Women Fashion</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full py-1 px-3 focus:outline-none"
            />
            <SearchIcon className="absolute right-3 cursor-pointer" />
          </div>
          <Link to="/cart" className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white rounded text-base">
            Cart ({cartCount})
            <ShoppingCartIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
