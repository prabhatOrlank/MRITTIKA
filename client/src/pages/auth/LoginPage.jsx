import React, { useState } from 'react'
import CommonLayout from '../../layout/CommonLayout'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
    const [activeAuthMode, setActiveAuthMode] = useState("login");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <CommonLayout>
            {/* Login Form */}
            {activeAuthMode === "login" && (<div className="flex flex-col md:flex-row gap-8 items-center divide-y md:divide-x md:divide-y-0 divide-gray-200 my-10">
                <div className="w-full md:w-1/2 md:pr-8 space-y-4 pb-10 md:pb-0">
                    <h1 className="text-2xl font-bold mb-4">Login </h1>
                    <form className="w-full">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" className="border border-gray-200 rounded-md p-2 w-full focus-visible:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    className="w-full focus-visible:outline-none"
                                />
                                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="text-sm text-gray-500 hover:underline">
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">Login</button>
                    </form>
                    <Link to="/forgot-password" className="pt-6 hover:text-orange-700">Forgot Password?</Link>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-4">New to MRITTIKA?</h2>
                    <p className="mb-4">Create an account to enjoy exclusive offers and faster checkout.</p>
                    <button onClick={() => setActiveAuthMode("register")} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">Register</button>
                </div>
            </div>)}

            {/* Register Form */}
            {activeAuthMode === "register" && (<div className="flex flex-col md:flex-row gap-8 items-center divide-y md:divide-x md:divide-y-0 divide-gray-200 my-10">
                <div className="w-full md:w-1/2 md:pr-8 space-y-4 pb-10 md:pb-0">
                    <h1 className="text-2xl font-bold mb-4">Register</h1>
                    <form className="w-full">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" className="border border-gray-200 rounded-md p-2 w-full focus-visible:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                            <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    className="w-full focus-visible:outline-none"
                                />
                                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="text-sm text-gray-500 hover:underline">
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">Confirm Password</label>
                            <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2">
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirm-password"
                                    className="w-full focus-visible:outline-none"
                                />
                                <button type="button" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className="text-sm text-gray-500 hover:underline">
                                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">Register</button>
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Already have an account?</h2>
                    <p className="mb-4">Login to access your account and manage your orders.</p>
                    <button onClick={() => setActiveAuthMode("login")} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">Login</button>
                </div>
            </div>)}
        </CommonLayout>
    )
}
