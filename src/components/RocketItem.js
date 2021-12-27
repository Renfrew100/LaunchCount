import React, { useState, Fragment } from "react"
import { useEffect } from "react"

import ChartContainer from "./PieChart"
import { navigate } from "gatsby"
import axios from "axios"
import CustomModal from "./CustomModal"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"

//import { useHttpClient } from "../../hooks/http-hook"

import Button from "./Button"

import "../styles/button.css"

const RocketItem = ({ rocketName, launchData, rocketId }) => {
const [modalState, setModalState] = useState(false)

 // const { isLoading, sendRequest } = useHttpClient()
 let [loadedRocket, setLoadedRocket] = useState({})

  const showModal = () => {
    setModalState(true)
  }

  const hideModal = () => {
    setModalState(false)
  }

  let {
    rocketState,
  } = useRocketReducer({
    rocketName: "",
    companyName: "",
    successLaunch: 0,
    failedLaunch: 0,
    postponedLaunch: 0,
  })

  const deleteHandler = () => {
    // Put the backend call here

    // record: this.state.records.filter((el) => el._id !== id),
    /*  axios.delete("http://localhost:5000/" + id).then((response) => {
    console.log(response.data);
    }) */
      const deletedRocket = {
        rocketID: loadedRocket._id,
        rocketName: rocketState.rocketName,
        companyName: rocketState.companyName,
        successLaunch: rocketState.successLaunch,
        failedLaunch: rocketState.failedLaunch,
        postponedLaunch: rocketState.postponedLaunch,
      }
      axios
        .post("http://localhost:5000/" + loadedRocket._id, deletedRocket)
        .then(res => console.log(res.data))
  
      console.log("Deleted rocket")
      navigate(`/CompanyPage/${deletedRocket.companyName}`)
    }  

  const editRocketHandler = () => {
    navigate(`/rocket/EditRocket/${rocketId}`)
  }

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
          <Button className="red-inverse rocket-mod-btn" onClick={showModal}>
            <h4>Delete Rocket</h4>
          </Button>
        </div>
      </div>
      <CustomModal
        modalState={modalState}
        hideHandler={hideModal}
        rocketName={rocketName}
        buttonHandler={deleteHandler}
      />
    </Fragment>
  )
}

export default RocketItem
