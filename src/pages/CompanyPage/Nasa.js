import React from "react"
import uuid from "react-uuid"

import Button from "../../shared/Button"

import "bootstrap/dist/css/bootstrap.css"
import "./styles/company.css"

const ROCKETS = [
  {
    name: "Falcon 9",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
    launches: {
      success: 5,
      failures: 3,
      postponed: 7,
    },
  },
  {
    name: "Falcon Heavy",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
    launches: {
      success: 10,
      failures: 2,
      postponed: 13,
    },
  },
  {
    name: "StarShip",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
    launches: {
      success: 16,
      failures: 22,
      postponed: 4,
    },
  },
]

const Nasa = () => {
  const buttonClickHandler = () => {}

  const createColumns = () => {
    return ROCKETS.map(rocket => (
      <div key={uuid()} className="card col-md-4 col-sm-6">
        <img className="card-img-top" src={rocket.imageURL} alt={rocket.name} />
        <div className="card-body">
          <h5 className="card-title display-5">{rocket.name}</h5>
          <Button className={"btn inverse"} onClick={buttonClickHandler}>
            Rocket Specs
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <div className="row">
        <h1 className="display-1">Nasa</h1>
      </div>
      <div className="row1">{createColumns()}</div>
    </div>
  )
}

export default Nasa
