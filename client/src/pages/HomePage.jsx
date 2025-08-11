import React from 'react'
import CommonLayout from '../layout/CommonLayout'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom';
import TrustFeatures from '../components/TrustFeatures';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
    const categories = [
        { name: "Home Decor", image: "/assets/Gardenware.jpg" },
        { name: "Kitchen & Dining", image: "/assets/Gardenware.jpg" },
        { name: "Gardenware", image: "/assets/Gardenware.jpg" },
        { name: "Festive Specials", image: "/assets/Gardenware.jpg" },
    ];

    const latestProducts = [
        {
            _id: "prod001",
            productName: "Elegant Terracotta Vase",
            description: "Handcrafted terracotta vase with intricate floral motifs, perfect for your home decor.",
            price: 1299.0,
            images: ["/assets/Gardenware.jpg"],
            category: "Home Decor",
        },
        {
            _id: "prod002",
            productName: "Clay Kulhad Set (6 pcs)",
            description: "Authentic clay kulhads to enjoy traditional tea or lassi, eco-friendly and reusable.",
            price: 499.0,
            images: ["/assets/Gardenware.jpg"],
            category: "Kitchen & Dining",
        },
        {
            _id: "prod003",
            productName: "Decorative Hanging Planter",
            description: "Rustic terracotta hanging planter designed to add charm to your garden or balcony.",
            price: 799.0,
            images: ["/assets/Gardenware.jpg"],
            category: "Gardenware",
        },
        {
            _id: "prod004",
            productName: "Hand-painted Diwali Diya",
            description: "Traditional clay diya hand-painted with vibrant colors, ideal for festive celebrations.",
            price: 249.0,
            images: ["/assets/Gardenware.jpg"],
            category: "Festive Specials",
        },
    ];


    return (
        <CommonLayout>
            {/* slider */}
            <Slider />

            {/* Shop by Category */}
            <div className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Shop by <span className='font-extrabold'>Category</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map(({ name, image }, index) => (
                        <Link
                            key={index}
                            to={`/collections/${name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="bg-white rounded-lg relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full object-cover hover:scale-105 transform transition-transform duration-300 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent rounded-xl pointer-events-none" />
                            </div>
                            <h3
                                className="absolute bottom-0 left-0 right-0 text-white text-lg font-semibold p-5 pointer-events-none"
                                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
                            >
                                {name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Banner */}
            <div className="my-12">
               <img src="/assets/D-2.webp" alt="Shop the Look" className='w-full h-96 rounded-xl' />
                {/* Banner content goes here */}
            </div>

            {/* Latest Collection */}
            <div id='latest-section' className="my-12">
                <h2 className="text-2xl font-semibold mb-6">
                    <span className="font-extrabold">Latest </span> Collection
                </h2>
                <div className="w-full flex overflow-x-auto space-x-6 px-4 md:grid md:grid-cols-4 md:gap-6 md:px-0">
                    {latestProducts.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Popular Collection */}
            <div id='popular-section' className="my-12">
                <h2 className="text-2xl font-semibold mb-6"><span className='font-extrabold'>Popular </span> Collection</h2>
                <div className="w-full flex overflow-x-auto space-x-6 px-4 md:grid md:grid-cols-4 md:gap-6 md:px-0">
                    {latestProducts.map(product => (
                       <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Trust Features Section */}
            <TrustFeatures />
        </CommonLayout>
    )
}
