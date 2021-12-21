import React from "react"
import uuid from "react-uuid"


import RocketItem from "./RocketItem"

import "../pages/CompanyPage/styles/company.css"

const RocketList = ({rockets}) => {
  return (
    <div className="row1">
      {rockets.map(rocket => (
        <RocketItem key={uuid()} {...rocket} />
      ))}
    </div>
  )
}

export default RocketList
