import React from 'react'
import UserLayout from '../../layout/UserLayout'

export default function UserProfile() {
    return (
        <UserLayout>
            {/* Page Heading */}
            <h1 className="text-xl font-bold mb-2">Welcome to Your Profile</h1>
            <p className="text-gray-600 mb-6">
                Here you can manage your account settings, view your activity, and update your profile information.
            </p>

            {/* Profile Card */}
            <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

                <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">Name:</span> John Doe</p>
                    <p><span className="font-medium">Email:</span> john.doe@example.com</p>
                    <p><span className="font-medium">Mobile:</span> +1 (555) 123-4567</p>
                    <p><span className="font-medium">Joined:</span> January 1, 2020</p>
                </div>

                {/* Edit Profile Button */}
                <button
                    className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded transition-colors"
                >
                    Edit Profile
                </button>
            </div>
        </UserLayout>
    )
}
