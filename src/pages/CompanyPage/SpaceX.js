import React from "react"

import RocketList from "../../components/RocketList"
import Button from "../../components/Button"

import "bootstrap/dist/css/bootstrap.css"
import "../../styles/company.css"

const ROCKETS = [
  {
    name: "Falcon 9",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    name: "Falcon Heavy",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    name: "StarShip",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
]

const SpaceX = () => {
  return (
    <div className="container">
      <h1 className="display-1">SpaceX</h1>
      <RocketList rockets={ROCKETS} />
        <Button className="yellow-inverse">
          <h3 className="display-4">Add Rocket</h3>
        </Button>
    </div>
  )
}

export default SpaceX
