import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GoogleLogin from './pages/GoogleLogin';
import OrdersPage from './pages/OrdersPage';
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import QRPayment from './pages/QRPayment'; // ✅ import karo

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/google-login" element={<GoogleLogin />} />
            <Route path="/qr-payment" element={<QRPayment />} />

          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
