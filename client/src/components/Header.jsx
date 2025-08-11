import React, { useState, useEffect } from 'react'
import { IoBagHandleOutline } from 'react-icons/io5';
import { MdOutlineMenu } from "react-icons/md";
import { LuCircleUserRound, LuX } from 'react-icons/lu';
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleSidebar = () => setSidebarOpen(prev => !prev);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [sidebarOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSidebarOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // Navigate to home page first with hash, then scroll will happen on load
            navigate('/#' + sectionId);
        } else {
            // Already on homepage, scroll smoothly
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const categories = [
        { name: "Home Decor", image: "/assets/Gardenware.jpg" },
        { name: "Kitchen & Dining", image: "/assets/Gardenware.jpg" },
        { name: "Gardenware", image: "/assets/Gardenware.jpg" },
        { name: "Festive Specials", image: "/assets/Gardenware.jpg" },
    ];

    return (
        <header className='w-full sticky top-0 flex justify-between items-center p-4 md:px-10 bg-white z-50 uppercase'>
            <div className="flex">
                <button onClick={toggleSidebar} className="md:hidden" aria-label="Toggle menu">
                    <MdOutlineMenu size={24} />
                </button>
                <nav className="hidden md:flex items-center gap-4">
                    <Link to="/collections" className="hover:text-orange-600">All Collections</Link>
                    <a href="#latest-section" onClick={e => scrollToSection(e, 'latest-section')} className="hover:text-orange-600">Latest</a>
                    <a href="#popular-section" onClick={e => scrollToSection(e, 'popular-section')} className="hover:text-orange-600">Popular</a>
                </nav>
            </div>

            <div className="flex items-center gap-4 relative lg:-left-26">
                <Link to="/" className="text-xl font-bold">MRITTIKA</Link>
                {/* <img src="/logo.png" alt="Logo" className="" /> */}
            </div>

            <div className="flex items-center gap-4">
                <Link to="/cart" className="relative hover:text-orange-600" aria-label="Cart">
                    <IoBagHandleOutline size={24} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">4</span>
                </Link>
                {/* <Link to="/auth" className="hover:text-orange-600" aria-label="User Account"><LuCircleUserRound size={24} /></Link> */}
                <Link to="/user/profile" className="hover:text-orange-600" aria-label="User Account"><LuCircleUserRound size={24} /></Link>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
            >
                <div
                    className={`absolute top-0 left-0 w-72 h-full bg-orange-600 text-white p-4 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={toggleSidebar}
                        className="w-full flex justify-end mb-4"
                        aria-label="Close menu"
                    >
                        <LuX size={24} />
                    </button>
                    <nav id="mobile-menu" className="flex flex-col gap-4 text-base">
                        <div className="">
                            <Link to="/collections" onClick={toggleSidebar} className="">All Collections</Link>
                            <div className="grid grid-cols-2 gap-2 mt-4 text-xs border-b pb-2">
                               {categories.map(({ name, image }, index) => (
                                   <Link
                                       key={index}
                                       to={`/collections/${name.toLowerCase().replace(/\s+/g, '-')}`}
                                       onClick={toggleSidebar}
                                       className="flex flex-col items-center gap-2"
                                   >
                                       <img src={image} alt={name} className="h-24 w-24 rounded-lg" />
                                       <span>{name}</span>
                                   </Link>
                               ))}
                            </div>
                        </div>
                        <a href="#latest-section" onClick={toggleSidebar} className="border-b pb-1">Latest</a>
                        <a href="#popular-section" onClick={toggleSidebar} className="border-b pb-1">Popular</a>
                        <Link to="/about" onClick={toggleSidebar} className="border-b pb-1">About</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
