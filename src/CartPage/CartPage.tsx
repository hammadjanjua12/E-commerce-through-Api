// CartPage.tsx
import React, { useState, useEffect } from 'react';

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

interface CartPageProps {
    cart: Product[];
    onClose: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onClose }) => {
    const [isCartOpen, setIsCartOpen] = useState(true);

    useEffect(() => {
        setIsCartOpen(true); // Ensure that the cart is open when the component mounts
    }, [cart]);


    const calculateSubtotal = () => {
        const subtotal = cart.reduce((total, product) => {
            return total + product.price;
        }, 0);

        return `$${subtotal.toFixed(2)}`;
    };


    const handleCartClose = () => {
        setIsCartOpen(false); // Update local state to close the cart
        onClose();
    };

    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-20 pb-16 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75" />
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Shopping cart</h3>
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                &#10005;
                            </button>

                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {cart.map((product) => (
                                        <li key={product.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>{product.title}</h3>
                                                        <p className="ml-4">${product.price.toFixed(2)}</p>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
                                                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>{calculateSubtotal()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>or </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
