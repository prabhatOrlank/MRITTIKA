import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { LuPackage, LuUserRound } from 'react-icons/lu';

export default function UserLayout({ children }) {
    const location = useLocation();
    return (
        <div className='w-full h-full flex flex-col'>
            <div className="text-center text-xs text-white bg-orange-600 p-2 uppercase">Get free delivery on orders over <span className="font-semibold">₹ 500</span></div>
            <Header />
            <main className="w-full px-4 md:px-10 flex md:flex-row h-full flex-col gap-6 p-4">
                <div className='w-full md:w-1/5 h-fit bg-gray-50 p-4 rounded-lg flex md:flex-col gap-4'>
                    <Link to='/user/profile' className={`w-full flex items-center gap-1.5 px-4 py-2 rounded-md ${location.pathname === '/user/profile' ? 'bg-orange-600 text-white' : 'hover:bg-orange-100 bg-white'}`}><LuUserRound /> Profile</Link>
                    <Link to='/user/orders' className={`w-full flex items-center gap-1.5 px-4 py-2 rounded-md ${location.pathname === '/user/orders' ? 'bg-orange-600 text-white' : 'hover:bg-orange-100 bg-white'}`}><LuPackage /> Orders</Link>
                </div>

                <div className='w-full md:w-4/5'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}
