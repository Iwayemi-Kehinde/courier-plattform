import AboutPage from "./Pages/AboutPage";
import AuthPage from "./Pages/AuthPage";
import Home from "./Pages/Home";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ProtectedRoute, ProtectedRouteAuth} from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={
        <AuthPage />
        
        } />
        <Route path="/user-dashboard" element={
          <ProtectedRoute>

            <UserDashboard />
          </ProtectedRoute>

        } />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
