import React, {lazy, Suspense } from "react";
import { BrowseRouter, Route, Link, Routes } from 'react-router-dom'

import LandingPage from "./pages/general/LandingPage";
import Signup from "./pages/general/Signup";
import Login from "./pages/general/Login";
const Admin = lazy(() => import("./pages/admin/Index"))
const User = lazy(() => import("./pages/user/Index"))


function App() {
  return (
    <section className="bg-blue-100 text-[16px]">
       <Suspense fallback={<h1 className="text-center mt-5 text-4xl font-bold text-blue-400">...loading</h1>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
