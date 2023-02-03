import React, { lazy, Suspense, useState } from "react";
import { withRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import LandingPage from "./pages/general/LandingPage";
import Signup from "./pages/general/Signup";
import Login from "./pages/general/Login";
import SendOtp from "./pages/general/SendOtp";
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
            ...loading
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="send-otp" element={<SendOtp />} />
          <Route path="/admin-registration" element={<AdminRegistration />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </section>
  );
}

export default App;
