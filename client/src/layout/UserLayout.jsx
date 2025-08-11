import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function UserLayout({ children }) {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className="text-center text-xs text-white bg-orange-600 p-2 uppercase">Get free delivery on orders over <span className="font-semibold">₹ 500</span></div>
            <Header />
            <main className="container flex md:flex-row h-full flex-col gap-6 mx-auto p-4 md:px-10">
                <div className='w-full md:w-1/4 h-fit bg-gray-100 p-4 rounded-lg flex flex-col space-y-3'>
                    <Link to={'/user/profile'} className='bg-white px-4 py-2 rounded-md'>Profile</Link>
                    <Link to={'/user/orders'} className='bg-white px-4 py-2 rounded-md'>Orders</Link>
                    <button onClick={() => { /* handle logout */ }} className='bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md'>Logout</button>
                </div>

                <div className='w-full md:w-3/4'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}
