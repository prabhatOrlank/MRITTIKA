import React, { useState } from 'react';
import CommonLayout from '../layout/CommonLayout';
import { Link } from 'react-router-dom';
import TrustFeatures from '../components/TrustFeatures';
import ProductCard from '../components/ProductCard';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';

export default function ProductDetailPage() {
    const [isReturnOpen, setReturnOpen] = useState(false);
    const [isShippingOpen, setShippingOpen] = useState(false);

    // Example product data matching your Mongoose model structure
    const product = {
        productName: "Elegant Terracotta Vase",
        description: "Handcrafted terracotta vase with intricate floral motifs, perfect for your home decor.",
        category: "Home Decor",
        productDetails: "This vase is handcrafted by skilled artisans using traditional terracotta techniques. This vase is handcrafted by skilled artisans using traditional terracotta techniques.This vase is handcrafted by skilled artisans using traditional terracotta techniques.This vase is handcrafted by skilled artisans using traditional terracotta techniques.This vase is handcrafted by skilled artisans using traditional terracotta techniques.This vase is handcrafted by skilled artisans using traditional terracotta techniques.",
        price: 1299,
        sku: "TVASE001",
        stockQuantity: 12,
        dimensions: { height: 25, width: 15, depth: 15 }, // cm
        weight: 1.2, // kg
        material: "Terracotta",
        careInstructions: "Handle with care. Clean with a dry cloth. Avoid prolonged exposure to water.",
        images: [
            "/assets/Gardenware.jpg",
            "/assets/Gardenware.jpg",
            "/assets/Gardenware.jpg",
            "/assets/Gardenware.jpg",
        ],
        isHandmade: true,
        limitedEdition: false,
        discountPercentage: 10,
        createdAt: "2024-01-10T12:00:00Z",
        updatedAt: "2024-05-05T15:30:00Z",
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    // Calculate discounted price
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    return (
        <CommonLayout>
            {/* Breadcrumbs */}
            <p className="w-full text-lg font-semibold capitalize mb-6">
                <Link to="/" className="hover:text-orange-600">Home</Link> /{' '}
                <Link to="/collections" className="hover:text-orange-600">Collections</Link> /{' '}
                <Link to={`/collections/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-orange-600">
                    {product.category}
                </Link> /{' '}
                <span className="text-gray-500">{product.productName}</span>
            </p>

            {/* Main Content */}
            <div className="w-full flex flex-col md:flex-row justify-between gap-10 border-b pb-10 border-gray-200">
                {/* Left: Image Gallery */}
                <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-6">
                    <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto px-2 md:px-0">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${product.productName} image ${idx + 1}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? 'border-orange-600' : 'border-transparent'
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                    <img
                        src={selectedImage}
                        alt={product.productName}
                        className="w-full h-80 md:h-[500px] object-cover rounded-lg"
                    />
                </div>

                {/* Right: Product Details */}
                <div className="w-full md:h-[500px] md:w-1/2 flex flex-col justify-start space-y-4 md:overflow-y-auto hide-scroll">
                    <h1 className="text-2xl md:text-3xl font-bold">{product.productName}</h1>
                    <p className="text-gray-700 italic">{product.description}</p>

                    {/* Price with discount */}
                    <div className="flex items-baseline space-x-3">
                        {product.discountPercentage > 0 && (
                            <p className="text-gray-500 line-through text-xl">₹{product.price.toFixed(2)}</p>
                        )}
                        <p className="text-orange-600 font-extrabold text-3xl">
                            ₹{discountedPrice.toFixed(2)}
                        </p>
                        {product.discountPercentage > 0 && (
                            <span className="bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                {product.discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    {/* SKU and Stock */}
                    <p className="text-sm text-gray-600">SKU: <span className="font-mono">{product.sku}</span></p>
                    <p className={`text-sm ${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {product.stockQuantity > 0 ? `In Stock (${product.stockQuantity} available)` : 'Out of Stock'}
                    </p>

                    {/* Handmade and Limited Edition */}
                    <div className="flex space-x-4">
                        {product.isHandmade && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Handmade
                            </span>
                        )}
                        {product.limitedEdition && (
                            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Limited Edition
                            </span>
                        )}
                    </div>

                    {/* Add to Cart */}
                    <button
                        disabled={product.stockQuantity === 0}
                        className={`w-full mt-2 px-8 py-3 rounded font-medium flex justify-center text-white transition ${product.stockQuantity > 0
                            ? 'bg-orange-600 hover:bg-orange-700 cursor-pointer'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {product.stockQuantity > 0 ? <span className='flex items-center gap-1.5 uppercase'><IoBagHandleOutline size={18} />Add to Cart</span> : 'Out of Stock'}
                    </button>

                    {/* Product Details */}
                    <div className="">
                        <h2 className="font-semibold text-lg mb-2">Product Details</h2>
                        <p className="text-gray-600">{product.productDetails}</p>
                    </div>

                    {/* Physical Attributes */}
                    <div className="border-t border-gray-200 pt-2">
                        <h2 className="font-semibold text-lg mb-2">Product Specifications</h2>
                        <ul className="text-gray-700 space-y-1 text-sm">
                            <li><strong>Category:</strong> {product.category}</li>
                            <li><strong>Dimensions (cm):</strong> H: {product.dimensions.height} × W: {product.dimensions.width} × D: {product.dimensions.depth}</li>
                            <li><strong>Weight:</strong> {product.weight} kg</li>
                            <li><strong>Material:</strong> {product.material}</li>
                            <li><strong>Care Instructions:</strong> {product.careInstructions}</li>
                        </ul>
                    </div>

                    <section className=" bg-gray-50 px-4 py-2 rounded-lg mb-6">
                        {/* Return Policies Accordion */}
                        <div className="border-b border-gray-200 pb-2 mb-2">
                            <button
                                onClick={() => setReturnOpen(!isReturnOpen)}
                                className="w-full text-left flex justify-between items-center font-semibold mb-1 focus:outline-none"
                                aria-expanded={isReturnOpen}
                                aria-controls="return-policies"
                            >
                                Return Policies
                                <span className={`transform transition-transform duration-300 ${isReturnOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    <FaAngleDown />
                                </span>
                            </button>
                            {isReturnOpen && (
                                <ol
                                    id="return-policies"
                                    className="list-decimal list-inside space-y-2 text-xs text-gray-700"
                                >
                                    <li>Returns are valid up to 7 days from the date of delivery.</li>
                                    <li>
                                        Read our{' '}
                                        <a href="/refund-policy" className="text-orange-600 hover:underline">
                                            Refund Policy
                                        </a>{' '}
                                        for more information.
                                    </li>
                                </ol>
                            )}
                        </div>

                        {/* Shipping & Returns Accordion */}
                        <div>
                            <button
                                onClick={() => setShippingOpen(!isShippingOpen)}
                                className="w-full text-left flex justify-between items-center font-semibold mb-1 focus:outline-none"
                                aria-expanded={isShippingOpen}
                                aria-controls="shipping-returns"
                            >
                                Shipping & Returns
                                <span className={`transform transition-transform duration-300 ${isShippingOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    <FaAngleDown />
                                </span>
                            </button>
                            {isShippingOpen && (
                                <ul
                                    id="shipping-returns"
                                    className="list-disc list-inside space-y-2 text-xs text-gray-700"
                                >
                                    <li>All orders will be delivered within 3 - 7 business days (depending on the location).</li>
                                    <li>Shipping or Delivery Charges are non-refundable in all cases.</li>
                                    <li>A tracking link will be sent to your Whatsapp or SMS as soon as your order is processed.</li>
                                </ul>
                            )}
                        </div>
                    </section>

                    {/* Trust Features Section */}
                    <TrustFeatures />
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">
                    <span className="font-extrabold">Related </span> Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, idx) => (
                        <ProductCard key={idx} product={{
                            _id: `related-${idx}`,
                            productName: `Related Product ${idx + 1}`,
                            description: "This is a related product.",
                            price: 999,
                            images: ["/assets/Gardenware.jpg"],
                            category: "Home Decor"
                        }} />
                    ))}
                </div>
            </div>
        </CommonLayout>
    );
}
