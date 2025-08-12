import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { BarChart3, Users, ShoppingBag, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Orders", value: "1,245", icon: <ShoppingBag className="w-6 h-6 text-blue-500" />, color: "bg-blue-100" },
    { title: "Total Customers", value: "982", icon: <Users className="w-6 h-6 text-green-500" />, color: "bg-green-100" },
    { title: "Revenue", value: "$58,430", icon: <DollarSign className="w-6 h-6 text-yellow-500" />, color: "bg-yellow-100" },
    { title: "Pending Orders", value: "73", icon: <BarChart3 className="w-6 h-6 text-red-500" />, color: "bg-red-100" },
  ];

  return (
    <AdminLayout>
      <div className="">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 flex items-center space-x-4"
            >
              <div className={`p-3 rounded-full ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-xl font-bold">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            📊 Chart will go here
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 text-gray-600">🛒 New order placed by John Doe</li>
            <li className="py-3 text-gray-600">👤 New customer registered</li>
            <li className="py-3 text-gray-600">📦 Order #1023 shipped</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
