import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommonLayout from '../layout/CommonLayout';
import ProductCard from '../components/ProductCard';

export default function CollectionPage() {
    const { category } = useParams(); // category can be undefined if just /collections
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            // Dummy data, replace with real API call later
            const data = [
                {
                    _id: "prod001",
                    productName: "Elegant Terracotta Vase",
                    description: "Handcrafted terracotta vase with intricate floral motifs.",
                    price: 1299,
                    images: ["/assets/Gardenware.jpg"],
                    category: "home-decor"
                },
                {
                    _id: "prod002",
                    productName: "Clay Kulhad Set (6 pcs)",
                    description: "Authentic clay kulhads for traditional tea or lassi.",
                    price: 499,
                    images: ["/assets/Gardenware.jpg"],
                    category: "kitchen-dining"
                },
                {
                    _id: "prod003",
                    productName: "Decorative Hanging Planter",
                    description: "Rustic terracotta hanging planter.",
                    price: 799,
                    images: ["/assets/Gardenware.jpg"],
                    category: "gardenware"
                },
                {
                    _id: "prod004",
                    productName: "Hand-painted Diwali Diya",
                    description: "Traditional clay diya hand-painted for Diwali.",
                    price: 249,
                    images: ["/assets/Gardenware.jpg"],
                    category: "festive-specials"
                },
            ];

            // If category param exists, filter; else show all
            const filtered = category ? data.filter(p => p.category === category) : data;
            setProducts(filtered);
        };

        fetchProducts();
    }, [category]);

    return (
        <CommonLayout>
            <div className="w-full mt-6 mb-12">
                <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between mb-6">
                    <p className="flex items-center text-lg font-semibold gap-1">
                        <Link to="/" className="hover:text-orange-600">Home</Link> /
                        {category ? (
                            <>
                                <Link to="/collections" className="hover:text-orange-600">Collections</Link> /
                                <Link to={`/collections/${category}`} className="hover:text-orange-600">{category.replace(/-/g, ' ')}</Link>
                            </>
                        ) : (
                            <Link to="/collections" className="hover:text-orange-600">Collections</Link>
                        )}
                    </p>
                    <div className="text-sm text-gray-600">
                        {products.length} {products.length === 1 ? 'product' : 'products'} found
                    </div>
                </div>

                {products.length === 0 ? (
                    <p>No products found in this collection.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {products.map(product => (
                           <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </CommonLayout>
    );
}
