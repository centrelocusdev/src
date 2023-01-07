import React from "react";
import { BrowseRouter, Route, Link, Routes } from 'react-router-dom'

import NavHeader from "../../components/NavHeader";
import NavMenu from "../../components/NavMenu";

const Index = () => {
  return <section className="bg-blue-100 text-[16px]">
      <NavHeader />
      <NavMenu />
    </section>
}

export default Index