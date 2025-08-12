import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminCategory() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Categories</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Category Name"
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Description"
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="categoryImage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category Image
              </label>
              <input
                type="file"
                name="categoryImage"
                id="categoryImage"
                className="block w-full text-sm text-gray-500 border rounded-lg file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0 file:text-sm file:font-semibold
                  file:bg-orange-50 file:text-orange-700
                  hover:file:bg-orange-100"
              />
            </div>
            <button
              type="submit"
              className="w-fit flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow"
            >
              <FaPlus size={16} />
              Add Category
            </button>
          </form>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Category Name</th>
                <th className="px-4 py-3 text-left">Slug</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Electronics</td>
                <td className="px-4 py-3">electronics</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaEdit size={14} /> Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                    <FaTrash size={14} /> Delete
                  </button>
                </td>
              </tr>
              {/* More rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
