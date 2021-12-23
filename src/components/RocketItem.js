import React from "react"
import ChartContainer from "./PieChart"

const RocketItem = ({ rocketName, launchData }) => {
  return (
    <div className="card col-md-4 col-sm-6">
      <ChartContainer rocketData={launchData} />
      <div className="card-body">
        <h5 className="card-title display-5">{rocketName}</h5>
      </div>
    </div>
  )
}

export default RocketItem
