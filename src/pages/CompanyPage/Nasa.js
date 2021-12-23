import React from "react"

import RocketList from "../../components/RocketList"

import "bootstrap/dist/css/bootstrap.css"
import "../../styles/company.css"

const ROCKETS = [
  {
    name: "Falcon 9",
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
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
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
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
    imageURL:
      "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
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

const Nasa = () => {
  return (
    <div>
      <div className="row">
        <h1 className="display-1">NASA</h1>
      </div>
      <RocketList rockets={ROCKETS}/>
    </div>
  )
}

export default Nasa
