import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CollectionPage from './pages/CollectionPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/auth/LoginPage'
import ForgotPassword from './pages/auth/ForgotPassword'
import UserOrders from './pages/user/UserOrders'
import UserProfile from './pages/user/UserProfile'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminProducts from './pages/admin/AdminProducts'
import AdminOrders from './pages/admin/AdminOrders'
import AdminCategory from './pages/admin/AdminCategory'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Collections overview */}
        <Route path="/collections" element={<CollectionPage />} />
        {/* Dynamic category route */}
        <Route path="/collections/:category" element={<CollectionPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/about" element={<AboutPage />} />
        {/* Additional routes can be added here */}
        {/* <Route path="/faq" element={<FaqPage />} /> */}
        {/* <Route path="/shipping" element={<ShippingPage />} /> */}
        {/* <Route path="/returns" element={<ReturnsPage />} /> */}
        {/* <Route path="/privacy" element={<PrivacyPolicyPage />} /> */}
        {/* <Route path="/terms" element={<TermsOfServicePage />} /> */}

        {/* Authentication routes */}
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* User-related routes */}
        <Route path="/user" >
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<UserOrders />} />
        </Route>

        {/* Admin-related routes */}
        <Route path="/admin" >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
