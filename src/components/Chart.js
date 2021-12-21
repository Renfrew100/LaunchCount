import React from "react"
import { Pie } from "react-chartjs-2"
import "chart.js/auto"

import "../styles/modal.css"

const Chart = ({ rocketData }) => {
  return <Pie data={rocketData} />
}

export default Chart
