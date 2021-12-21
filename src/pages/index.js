import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./MainPage"
import SpaceX from "./CompanyPage/SpaceX"
import BlueOrigin from "./CompanyPage/BlueOrigin"
import Nasa from "./CompanyPage/Nasa"

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/CompanyPage/SpaceX" element={<SpaceX />} />
        <Route path="/CompanyPage/BlueOrigin" element={<BlueOrigin />} />
        <Route path="/CompanyPage/Nasa" element={<Nasa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
