import React from "react"
import CompanyPageFactory from "./CompanyPageFactory"

/* id = 0;
value = 0;
companyName = "";
rocketName = ""; */

const ROCKETS = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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

//ROCKETS.push(AddRocket.newrocket())


const SpaceX = () => {
  return <CompanyPageFactory companyName={"SpaceX"} rocketData={ROCKETS} />
}

export default SpaceX
