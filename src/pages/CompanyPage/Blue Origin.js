import React, { useEffect, useState } from "react"
import CompanyPageFactory from "./CompanyPageFactory"
import { useHttpClient } from "../../hooks/http-hook"
import Pie from "../../components/PieChart"


const BlueOrigin = () => {
  let [rocketDatabaseData, setRocketDatabaseData] = useState([])
  const [rocketGraphData, setRocketGraphData] = useState([])
  const { isLoading, sendRequest } = useHttpClient()

  useEffect(() => {
    // mapping the data from the database into a format that the KendoReact Graph API understands
    rocketDatabaseData = rocketDatabaseData.map(rocket => {
      const id = rocket._id
      const rocketName = rocket.rocketName
      const companyName = rocket.companyName
      const successLaunch = rocket.successLaunch
      const failedLaunch = rocket.failedLaunch
      const postponedLaunch = rocket.postponedLaunch

      setRocketGraphData(prevState => [
        ...prevState,
        {
          id,
          name: rocketName,
          companyName,
          launches: [
            {
              category: "success",
              value: successLaunch,
              color: "#00ff00",
            },
            {
              category: "failures",
              value: failedLaunch,
              color: "#ff0000",
            },
            {
              category: "postponed",
              value: postponedLaunch,
              color: "#fefe20",
            },
          ],
        },
      ])
    })
  }, [rocketDatabaseData])

  return (
    <React.Fragment>
      <Pie />
      {isLoading && (
        <div>
          <h3>Loading data</h3>
        </div>
      )}
      {!isLoading && (
        <CompanyPageFactory companyName={"Blue Origin"} rocketData={rocketGraphData} />
      )}
    </React.Fragment>
  )
}

export default BlueOrigin
