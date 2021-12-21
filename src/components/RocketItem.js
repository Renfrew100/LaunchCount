import React from "react"
import PieChart from "./Chart"
import data from "./rockets.json"

const RocketItem = ({ name }) => {
  return (
    <div className="card col-md-4 col-sm-6">
      <PieChart rocketData={data} />
      <div className="card-body">
        <h5 className="card-title display-5">{name}</h5>
      </div>
    </div>
  )
}

export default RocketItem
