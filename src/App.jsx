import React, { lazy, Suspense, useState } from "react";
import { withRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoutes from './utils/PrivateRoutes'
import LandingPage from "./pages/general/LandingPage";
import Register from "./pages/general/Register";
import Login from "./pages/general/Login";
import ForgotPassword from "./pages/general/ForgotPassword";
import AdminRegistration from "./pages/general/AdminRegistration";
const Admin = lazy(() => import("./pages/admin/Index"));
const User = lazy(() => import("./pages/user/Index"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (setLogin) => setIsLoggedIn(setLogin);
  const logout = () => setIsLoggedIn(false);

  return (
    <section className="bg-blue-100 text-[16px]">
      <Suspense
        fallback={
          <div className="min-h-screen bg-gray-900 text-center mt-5 text-4xl font-bold text-gray-200">
            <FaSpinner className="text-white" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin-registration" element={<AdminRegistration />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/user-dashboard" element={<User />} />
            <Route path="/admin-dashboard" element={<Admin />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </section>
  );
}

export default App;
