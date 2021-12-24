import React from "react"
import { navigate } from "gatsby"

import RocketList from "../../components/RocketList"
import Button from "../../components/Button"

import "bootstrap/dist/css/bootstrap.css"
import "../../styles/company.css"


const CompanyPageFactory = props => {
  const addRocketHandler = () => {
    navigate("/rocket/AddRocket")
  }

  return (
    <div className="container">
      <h1 className="display-1">{props.companyName}</h1>
      <RocketList rockets={props.rocketData} />
      <Button className="green-inverse" onClick={addRocketHandler}>
        <h3 className="display-4">Add Rocket</h3>
      </Button>
    </div>
  )
}

export default CompanyPageFactory
