import React, {lazy, Suspense } from "react";
import { BrowseRouter, Route, Link, Routes } from 'react-router-dom'

import NavHeader from "./components/NavHeader";
import NavMenu from "./components/NavMenu";

const Dashboard = lazy(() => import("./pages/user/Dashboard"))
const Transaction = lazy(() => import("./pages/user/Transaction"))
const TransactionDetails = lazy(() => import("./pages/user/TransxDetails"))
const Profile = lazy(() => import("./pages/user/Profile"))
const KycForm = lazy(() => import("./pages/user/KycForm"))
const KycVerification = lazy(() => import("./pages/user/KycVerification"))
const KycCompleted = lazy(() => import("./pages/user/KycCompleted"))
const BuyTokens = lazy(() => import("./pages/user/BuyTokens"))
const IcoDistribution = lazy(() => import("./pages/user/IcoDistribution"))
const Admin = lazy(() => import("./pages/admin/Index"))


function App() {
  return (
    <section className="bg-blue-100 text-[16px]">
       <Suspense fallback={<h1 className="text-center mt-5 text-4xl font-bold text-blue-400">...loading</h1>}>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<KycForm />} />
          <Route path="/kyc-form" element={<KycForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/buy-tokens" element={<BuyTokens />} />
          <Route path="/ico-distribution" element={<IcoDistribution />} />
          <Route path="/transctions" element={<Transaction />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/kyc-verification" element={<KycVerification />} />
          <Route path="/kyc-completed" element={<KycCompleted />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
