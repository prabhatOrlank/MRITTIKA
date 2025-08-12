import React, { useState } from 'react';
import CommonLayout from '../layout/CommonLayout';
import { FaShoppingBag } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
    const navigate = useNavigate();
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [error, setError] = useState('');

    const applyPromoCode = () => {
        if (promoCode === 'BLACKFRIDAY') {
            setDiscount(0.2); // Apply 20% discount
        } else {
            setError('Invalid coupon code or coupon inapplicable.');
        }
    };

    // Example static cart items data
    const [cartItems, setCartItems] = useState([
        {
            id: '1',
            productName: 'Elegant Terracotta Vase',
            price: 1299,
            quantity: 2,
            image: '/assets/Gardenware.jpg',
        },
        {
            id: '2',
            productName: 'Handmade Clay Bowl',
            price: 599,
            quantity: 1,
            image: '/assets/Gardenware.jpg',
        },
    ]);

    // Update quantity handler
    const updateQuantity = (id, newQty) => {
        if (newQty < 1) return; // prevent zero or negative quantity
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: newQty } : item
            )
        );
    };

    // Remove item handler
    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const DELIVERY_CHARGE = 50;

    const BASE_DISCOUNT = 0.10; // 10% default discount
    const promoDiscount = discount; // 0 if no promo code applied, else e.g. 0.2

    // Use promoDiscount if applied, otherwise default base discount
    const effectiveDiscount = promoDiscount > 0 ? promoDiscount : BASE_DISCOUNT;

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = subtotal * effectiveDiscount;
    const totalPayable = subtotal - discountAmount + DELIVERY_CHARGE;


    return (
        <CommonLayout>
            <div className="w-full">
                <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center max-w-md mx-auto">
                        <FaShoppingBag size={64} className="text-orange-600 mb-4" />
                        <p className="text-gray-700 text-lg mb-4">Your cart is empty.</p>
                        <p className="text-gray-500 mb-6">
                            Looks like you haven’t added anything to your cart yet.
                        </p>
                        <Link
                            to="/collections"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold transition"
                        >
                            Start Shopping
                        </Link>
                    </div>

                ) : (
                    <div className="w-full h-fit flex md:flex-row flex-col gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="w-full md:w-2/3 flex flex-col divide-y divide-gray-200 pb-2 md:pr-6">
                            {cartItems.map(({ id, productName, price, quantity, image }) => (
                                <div key={id} className="flex items-center pb-4 mt-4">
                                    <img
                                        src={image}
                                        alt={productName}
                                        className="w-24 h-24 object-cover rounded-lg mr-6"
                                    />
                                    <div className="w-full items-start md:items-center flex md:flex-row flex-col">
                                        <div className="flex-1">
                                            <h2 className="text-base">{productName}</h2>
                                            <p className="text-orange-600 font-bold">₹{price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <button
                                                onClick={() => updateQuantity(id, quantity - 1)}
                                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                aria-label={`Decrease quantity of ${productName}`}
                                            >
                                                -
                                            </button>
                                            <span className="w-6 text-center">{quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(id, quantity + 1)}
                                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                aria-label={`Increase quantity of ${productName}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex w-full md:w-fit justify-between items-center">
                                            <p className="w-24 md:text-right md:font-semibold">
                                                ₹{(price * quantity).toFixed(2)}
                                            </p>
                                            <button
                                                onClick={() => removeItem(id)}
                                                className="ml-6 text-red-600 hover:underline"
                                                aria-label={`Remove ${productName} from cart`}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-fit md:w-1/3 space-y-2">
                            <h2 className="text-lg font-semibold mb-6"></h2>
                            <div className="flex justify-between items-center">
                                <p>Subtotal</p>
                                <p>₹{subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Discount ({(effectiveDiscount * 100).toFixed(0)}%)</p>
                                <p className="">- ₹{discountAmount.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Delivery</p>
                                <p>₹{DELIVERY_CHARGE.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between border-dotted border-t border-b items-center border-gray-300 py-2 my-2">
                                <p className="text-lg font-semibold">Total</p>
                                <p className="text-lg font-semibold">₹{totalPayable.toFixed(2)}</p>
                            </div>
                            <div className="">
                                <p className="">Do you have a promotional code?</p>
                                <div className="flex gap-2 items-center ">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="w-full px-3 py-2 border border-gray-200 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button onClick={applyPromoCode} className="mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                                        Apply
                                    </button>
                                </div>
                                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.
                            </p>

                            <button onClick={() => { navigate("/checkout") }} className="mt-4 w-full bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 font-semibold">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </CommonLayout>
    );
}
