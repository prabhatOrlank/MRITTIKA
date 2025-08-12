import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuCircleUserRound, LuPackage, LuUserRound } from "react-icons/lu";
import { MdOutlineMenu, MdClose, MdNotifications, MdLogout, MdOutlineDashboard, MdOutlineCategory } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";

export default function AdminLayout({ children }) {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
    }, [sidebarOpen]);

    const getInitials = (fullName) =>
        fullName
            .split(" ")
            .map((word) => word[0]?.toUpperCase())
            .join("");


    const navItems = [
        { path: "/admin/dashboard", icon: <MdOutlineDashboard />, label: "Dashboard" },
        { path: "/admin/category", icon: <MdOutlineCategory />, label: "Category" },
        { path: "/admin/products", icon: <AiOutlineProduct />, label: "Products" },
        { path: "/admin/orders", icon: <LuPackage />, label: "Orders" },
        { path: "/admin/users", icon: <LuUserRound />, label: "Users" },
    ];

    return (
        <div className="w-full h-screen flex overflow-hidden bg-gray-50">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex md:w-1/5 flex-col bg-black text-white p-4">
                <Link to='/' className="text-xl font-semibold mb-6">MRITTIKA</Link>
                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path
                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                                : "hover:bg-white hover:text-black"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Sidebar (Mobile) */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />
            )}
            <aside
                className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 transform z-50 transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Admin Panel</h2>
                    <button onClick={toggleSidebar} className="text-white">
                        <MdClose size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={toggleSidebar}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path
                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                                : "hover:bg-gray-800 hover:text-orange-400"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="sticky top-0 bg-white border-b border-gray-300 flex justify-between items-center px-4 py-3 z-30">
                    <div className="flex items-center gap-2">
                        <button onClick={toggleSidebar} className="md:hidden" aria-label="Toggle menu">
                            <MdOutlineMenu size={24} />
                        </button>
                        <h1 className="">Welcome, Admin</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => { setNotificationDropdownOpen(!notificationDropdownOpen); setProfileDropdownOpen(false); }} className="hover:text-orange-600" aria-label="Notifications">
                            <span className="relative">
                                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
                                <MdNotifications size={24} />
                            </span>
                        </button>
                        <button onClick={() => { setProfileDropdownOpen(!profileDropdownOpen); setNotificationDropdownOpen(false); }} className="hover:text-orange-600" aria-label="User Account"><LuCircleUserRound size={24} /></button>
                    </div>
                </header>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                    <div className="absolute right-4 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-2 text-sm text-gray-700 border-b border-gray-300">
                            <div className="w-10 h-10 rounded-full border-4 border-white bg-white text-orange-600 flex items-center justify-center text-lg font-bold ">
                                {getInitials("Admin D")}
                            </div>
                            <p className="">Admin</p>
                            <span className="text-xs">email@example.com</span>
                        </div>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"><LuUserRound /> Profile</button>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"><MdLogout /> Logout</button>
                    </div>
                )}

                {/* Notification Dropdown */}
                {notificationDropdownOpen && (
                    <div className="absolute right-14 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <div className="bg-gray-100 flex flex-col items-center justify-center px-4 py-2 text-sm text-gray-700 border-b border-gray-300">
                            <p className="">Notifications</p>
                        </div>
                        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"><MdNotifications /> View All</button>
                    </div>
                )}

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4">{children}</main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-300 p-4 text-center text-sm text-gray-500">
                     &copy; {new Date().getFullYear()} MRITTIKA — Preserving timeless terracotta artistry
                </footer>
            </div>
        </div>
    );
}
