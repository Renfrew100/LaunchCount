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

  const editRocketHandler = rocketId => {
    navigate("/rocket/EditRocket")
  }

  const homeHandler = () => {
    navigate("/")
  }

  return (
    <div className="container">
      <h1 className="display-10">{props.companyName}</h1>
      <RocketList rockets={props.rocketData} />
      <Button className="green-inverse" onClick={addRocketHandler}>
        <h9 className="display-4">Add Rocket</h9>
      </Button>
      <Button className="green-inverse" onClick={editRocketHandler}>
        <h9 className="display-4">Edit Rocket</h9>
      </Button>
      <Button className="blue-inverse return-home" onClick={homeHandler}>
        <h9 className="display-4">Return Home</h9>
      </Button>
    </div>
  )
}

export default CompanyPageFactory
