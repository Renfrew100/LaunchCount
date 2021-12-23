import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainPage from "./MainPage"
import SpaceX from "./CompanyPage/SpaceX"
import BlueOrigin from "./CompanyPage/BlueOrigin"
import Nasa from "./CompanyPage/Nasa"
import AddRocket from "./api/AddRocket"
import DeleteRocket from "./api/DeleteRocket"
import EditRocket from "./api/EditRocket"

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/CompanyPage/SpaceX" element={<SpaceX />} />
        <Route path="/CompanyPage/BlueOrigin" element={<BlueOrigin />} />
        <Route path="/CompanyPage/Nasa" element={<Nasa />} />
        <Route path="/api/AddRocket" element={<AddRocket />} />
        <Route path="/api/DeleteRocket" element={<DeleteRocket />} />
        <Route path="/api/EditRocket" element={<EditRocket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
