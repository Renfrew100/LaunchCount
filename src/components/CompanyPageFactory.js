import React from "react"

import RocketList from "./RocketList"
import Button from "./Button"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/company.css"

const CompanyPageFactory = props => {
  return (
    <div className="container">
      <h1 className="display-1">{props.companyName}</h1>
      <RocketList rockets={props.rocketData} />
      <Button className="yellow-inverse">
        <h3 className="display-4">Add Rocket</h3>
      </Button>
    </div>
  )
}

export default CompanyPageFactory
