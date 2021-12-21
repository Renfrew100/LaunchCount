import React from "react"
import Chart from "react-google-charts"
import "chart.js/auto"

import "../styles/modal.css"

const PieChart = ({ rocketData }) => {
  return (
    <Chart
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={rocketData}
      options={{
        title: "Rocket Launches",
        is3D: true
      }}
    />
  )
}

export default PieChart
