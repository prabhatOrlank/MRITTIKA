import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <Link to={`/product`} className="w-full flex rounded-lg flex-col items-center text-center gap-1">
            <div className="h-40 w-40 md:w-full md:h-64 overflow-hidden rounded-lg">
                <img
                    src={product.images[0]}
                    alt={product.productName}
                    className="w-full h-full object-cover hover:scale-105 transform transition-transform duration-300 ease-in-out"
                />
            </div>
            <h3 className="pt-2 text-xs font-medium">{product.productName}</h3>
            <div className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold">₹{product.price.toFixed(2)}</span>
                <span className="text-neutral-600 line-through">₹{product.price.toFixed(2)}</span>
            </div>
            <button
                className="w-fit flex items-center gap-1.5 justify-center text-white bg-orange-600 hover:bg-orange-700 p-2 px-4 md:px-8 rounded-full font-semibold transition-colors duration-300"
                aria-label={`Add ${product.productName} to cart`}
            >
               <FaShoppingBag /> Add to Cart
            </button>
        </Link>
    );
}
