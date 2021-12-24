import React, { useState } from "react"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Router} from "@reach/router"

import MainPage from "./MainPage"
import SpaceX from "./CompanyPage/SpaceX"
import BlueOrigin from "./CompanyPage/BlueOrigin"
import Nasa from "./CompanyPage/Nasa"
import AddRocket from "./rocket/AddRocket"
import EditRocket from "./rocket/EditRocket"

const Index = () => {
  return (
    <Router>
      <MainPage path="/" />
      <SpaceX path="/CompanyPage/SpaceX"/>
      <BlueOrigin path="/CompanyPage/BlueOrigin"/>
      <Nasa path="/CompanyPage/Nasa"/>
      <AddRocket path="/rocket/AddRocket"/>
      <EditRocket path="/rocket/EditRocket/:rocketId"/>
    </Router>
  )
}

export default Index
