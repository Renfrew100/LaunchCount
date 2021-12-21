import React from "react"

import RocketList from "../../components/RocketList"

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

const SpaceX = () => {
  return (
    <div>
      <div className="row">
        <h1 className="display-1">SpaceX</h1>
      </div>
      <RocketList rockets={ROCKETS}/>
    </div>
  )
}

export default SpaceX
