import React from "react"
import {Router} from "@reach/router"

import MainPage from "./MainPage"
import SpaceX from "./CompanyPage/SpaceX"
import BlueOrigin from "./CompanyPage/BlueOrigin"
import NASA from "./CompanyPage/NASA"
import AddRocket from "./rocket/AddRocket"
import EditRocket from "./rocket/EditRocket"

const Index = () => {
  return (
    <Router>
      <MainPage path="/" />
      <SpaceX path="/CompanyPage/SpaceX"/>
      <BlueOrigin path="/CompanyPage/BlueOrigin"/>
      <NASA path="/CompanyPage/NASA"/>
      <AddRocket path="/rocket/AddRocket"/>
      <EditRocket path="/rocket/EditRocket/:rocketId"/>
    </Router>
  )
}

export default Index
