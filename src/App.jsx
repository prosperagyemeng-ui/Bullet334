import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import CategoriesPage from './pages/CategoriesPage';
import WatchPage from './pages/WatchPage';
import CreatorChannelPage from './pages/CreatorChannelPage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SubscriptionPage from './pages/SubscriptionPage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-900 text-white">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/watch/:videoId" element={<WatchPage />} />
              <Route path="/channel/:creatorId" element={<CreatorChannelPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;
