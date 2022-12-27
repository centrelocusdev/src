import React, {lazy, Suspense } from "react";
import { BrowseRouter, Route, Link, Routes } from 'react-router-dom'

import NavHeader from "./components/NavHeader";
import NavMenu from "./components/NavMenu";

const Home = lazy(() => import("./pages")) 
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Transaction = lazy(() => import("./pages/Transaction"))
const TransactionDetails = lazy(() => import("./pages/TransxDetails"))
const Profile = lazy(() => import("./pages/Profile"))
const KycForm = lazy(() => import("./pages/KycForm"))
const KycVerification = lazy(() => import("./pages/KycVerification"))
const KycCompleted = lazy(() => import("./pages/KycCompleted"))


function App() {
  return (
    <section className="bg-blue-100 text-[16px]">
       <Suspense fallback={<h1 className="text-center mt-5 text-4xl font-bold text-blue-400">...loading</h1>}>
        <NavHeader />
        <NavMenu />
        <Routes>
          <Route path="/" element={<KycForm />} />
          <Route path="/kyc-form" element={<KycForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transctions" element={<Transaction />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/kyc-verification" element={<KycVerification />} />
          <Route path="/kyc-completed" element={<KycCompleted />} />
        </Routes>
      </Suspense>
    </section>

    // <div className='bg-blue-100 text-[16px]'>
    //     <Dashboard />
    // </div>
  );
}

export default App;
