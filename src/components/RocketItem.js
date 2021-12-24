import React, { useContext, useState, useEffect, Fragment } from "react"
import ChartContainer from "./PieChart"
import { navigate } from "gatsby"
import RocketContext from "../context/rocket-context"
import CustomModal from "./CustomModal"

import Button from "./Button"

import "../styles/button.css"
// import RocketContext from "../context/rocket-context"

const RocketItem = ({ rocketName, launchData }) => {
  const { rocketNameState, setRocketName } = useContext(RocketContext)

  const [dataReady, setDataReady] = useState(false)

  const [modalState, setModalState] = useState(false)

  const showModal = () => {
    setModalState(true)
  }

  const hideModal = () => {
    setModalState(false)
  }

  const editRocketHandler = () => {
    // const successLaunchData = launchData.find(rocketData => rocketData.category === "success").value
    // const failedLaunchData = launchData.find(rocketData => rocketData.category === "failures").value
    // const postponedLaunchData = launchData.find(rocketData => rocketData.category === "postponed").value
    setRocketName("jason")
    // console.log(context.rocketNameState);
    // context.successLaunchHandler(successLaunchData)
    // context.failedLaunchHandler(failedLaunchData)
    // context.postponedLaunchHandler(postponedLaunchData)
    navigate("/api/EditRocket")
  }

  // useEffect(() => {
  //   if (dataReady) {
  //     navigate("/api/EditRocket")
  //   }
  // }, [dataReady])

  return (
    <Fragment>
      <div className="card col-md-4 col-sm-6">
        <ChartContainer rocketData={launchData} />
        <div className="card-body">
          <h5 className="card-title display-5">{rocketName}</h5>
          <Button
            className="yellow-inverse rocket-mod-btn"
            onClick={editRocketHandler}
          >
            <h4>Edit Rocket Stats</h4>
          </Button>
          <Button
            className="red-inverse rocket-mod-btn"
            onClick={showModal}
          >
            <h4>Delete Rocket</h4>
          </Button>
        </div>
      </div>
      <CustomModal modalState={modalState} hideHandler={hideModal} rocketName={rocketName}/>
    </Fragment>
  )
}

export default RocketItem
