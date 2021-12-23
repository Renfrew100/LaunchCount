import React from "react"
import uuid from "react-uuid"


import RocketItem from "./RocketItem"

import "../styles/company.css"

const RocketList = ({rockets}) => {
  return (
    <div className="row">
      {rockets.map(rocket => (
        <RocketItem key={uuid()} rocketName={rocket.name} launchData={rocket.launches} />
      ))}
    </div>
  )
}

export default RocketList
