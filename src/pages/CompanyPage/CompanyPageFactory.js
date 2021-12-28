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

<<<<<<< HEAD
=======
  const homeHandler = () => {
    navigate("/")
  }

>>>>>>> main
  return (
    <div className="container">
      <h1 className="display-1">{props.companyName}</h1>
      <RocketList rockets={props.rocketData} />
      <Button className="green-inverse" onClick={addRocketHandler}>
<<<<<<< HEAD
        <h3 className="display-4">Add Rocket</h3>
=======
        <h9 className="display-4">Add Rocket</h9>
      </Button>
      <Button className="blue-inverse return-home" onClick={homeHandler}>
        <h9 className="display-4">Return Home</h9>
>>>>>>> main
      </Button>
    </div>
  )
}

export default CompanyPageFactory
