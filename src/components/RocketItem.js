import React from "react"
import ChartContainer from "./PieChart"

import Button from "./Button"

const RocketItem = ({ rocketName, launchData }) => {
  return (
    <div className="card col-md-4 col-sm-6">
      <ChartContainer rocketData={launchData} />
      <div className="card-body">
        <h5 className="card-title display-5">{rocketName}</h5>
        <Button className="blue-inverse rocket-mod-btn">
          <h4>Edit Rocket Stats</h4>
        </Button>
        <Button className="red-inverse rocket-mod-btn">
          <h4>Delete Rocket</h4>
        </Button>
      </div>
    </div>
  )
}

export default RocketItem
