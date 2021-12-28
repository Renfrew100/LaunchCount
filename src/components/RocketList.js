import React from "react"
import uuid from "react-uuid"


import RocketItem from "./RocketItem"

import "../styles/company.css"

const RocketList = ({rockets}) => {
  return (
    <div className="row">
      {rockets.map(rocket => (
<<<<<<< HEAD
        <RocketItem key={uuid()} rocketName={rocket.name} launchData={rocket.launches} rocketId={rocket.id} />
=======
        <RocketItem key={uuid()} companyName={rocket.companyName} rocketName={rocket.name} launchData={rocket.launches} rocketId={rocket.id} />
>>>>>>> main
      ))}
    </div>
  )
}

export default RocketList
