<<<<<<< HEAD
import React, { useState } from "react"
=======
import React, { useState, useEffect } from "react"
import { matchPath } from "react-router-dom"
import { navigate } from "@reach/router"
>>>>>>> main

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"
<<<<<<< HEAD

// This is temporary until we get actual data in the database
const ROCKETS = [
  {
    id: "1",
    name: "Falcon 9",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    id: "2",
    name: "Falcon Heavy",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
  {
    id: "3",
    name: "StarShip",
    launches: [
      {
        category: "success",
        value: 5,
        color: "#00ff00",
      },
      {
        category: "failures",
        value: 12,
        color: "#ff0000",
      },
      {
        category: "postponed",
        value: 6,
        color: "#fefe20",
      },
    ],
  },
]

const EditRocket = props => {
  const rocket = ROCKETS.find(rocket => rocket.id === props.params["*"])

  const launches = rocket.launches

  const successLaunchList = launches.find(
    launch => launch.category === "success"
  )
  const failedLaunchList = launches.find(
    launch => launch.category === "failures"
  )
  const postponedLaunchList = launches.find(
    launch => launch.category === "postponed"
  )


  const {
    rocketState,
=======
import { useHttpClient } from "../../hooks/http-hook"

import axios from "axios"

const COMPANIES = ["SpaceX", "Blue Origin", "Nasa"]

const EditRocket = props => {
  const { isLoading, sendRequest } = useHttpClient()
  let [loadedRocket, setLoadedRocket] = useState({})

  const match = matchPath(
    `/CompanyPage/EditRocket/:companyName/:rocketId`,
    `/CompanyPage/EditRocket/${props.params["*"]}`
  )

  let companyName = match.params.companyName
  let rocketId = match.params.rocketId
  /* 
  The match variable looks like
  {
    "params": {
        "companyName": "Nasa",
        "rocketId": "61c9ddf106309ae93cf39d40"
    },
    "pathname": "/CompanyPage/EditRocket/Nasa/61c9ddf106309ae93cf39d40",
    "pathnameBase": "/CompanyPage/EditRocket/Nasa/61c9ddf106309ae93cf39d40",
    "pattern": {
        "path": "/CompanyPage/EditRocket/:companyName/:rocketId",
        "caseSensitive": false,
        "end": true
    }
  }
  */

  // let one =
  //   "http://localhost:5000/rockets/SpaceX/${props.params["*"]}";
  // let two =
  //   "http://localhost:5000/rockets/Blue Origin/${props.params["*"]}";
  // let three =
  //   "http://localhost:5000/rockets/Nasa/${props.params["*"]}";

  //   const requestOne = axios.get(one);
  //   const requestTwo = axios.get(two);
  //   const requestThree = axios.get(three);

  // axios
  //   .all([requestOne, requestTwo, requestThree])
  //   .then(
  //     axios.spread((...responses) => {
  //       const responseOne = responses[0];
  //       const responseTwo = responses[1];
  //       const responesThree = responses[2];

  //       // use/access the results
  //       console.log(responseOne, responseTwo, responesThree);
  //     })
  //   )
  //   .catch(errors => {
  //     // react on errors.
  //     console.error(errors);
  //   });

  useEffect(() => {
    const getRocket = async () => {
      try {
        const rocketData = await sendRequest(
          `http://localhost:5000/rockets/${companyName}/${rocketId}`
          //`http://localhost:5000/rockets/Blue Origin/${props.params["*"]}`
          //`http://localhost:5000/rockets/NASA/${props.params["*"]}`
        )
        setLoadedRocket(rocketData)
      } catch (err) {}
    }

    getRocket()
  }, [sendRequest, setLoadedRocket])

  let {
    rocketState,
    companyNameHandler,
>>>>>>> main
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  } = useRocketReducer({
<<<<<<< HEAD
    rocketName: rocket.name,
    successLaunch: successLaunchList.value,
    failedLaunch: failedLaunchList.value,
    postponedLaunch: postponedLaunchList.value,
  })

  const submitHandler = e => {
    e.preventDefault()
    console.log("Edit rocket")
=======
    rocketName: "",
    companyName: "",
    successLaunch: 0,
    failedLaunch: 0,
    postponedLaunch: 0,
  })

  useEffect(() => {
    // pre-populate with existing rocket data
    companyNameHandler(loadedRocket.companyName)
    rocketNameHandler(loadedRocket.rocketName)
    successLaunchHandler(loadedRocket.successLaunch)
    failedLaunchHandler(loadedRocket.failedLaunch)
    postponedLaunchHandler(loadedRocket.postponedLaunch)
  }, [loadedRocket])

  const submitHandler = e => {
    const editedRocket = {
      rocketID: loadedRocket._id,
      rocketName: rocketState.rocketName,
      companyName: rocketState.companyName,
      successLaunch: rocketState.successLaunch,
      failedLaunch: rocketState.failedLaunch,
      postponedLaunch: rocketState.postponedLaunch,
    }
    axios
      .post("http://localhost:5000/update/" + loadedRocket._id, editedRocket)
      .then(res => console.log(res.data))

    console.log("Edited rocket")
    navigate(`/CompanyPage/${editedRocket.companyName}`)
>>>>>>> main
  }

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  return (
<<<<<<< HEAD
    <div className="container">
      <h2 className="display-3">Edit Rocket</h2>
      <CustomForm submitHandler={submitHandler}>
        <ControlGroup
          labelText="Rocket Name"
          htmlFor="rocketName"
          changeHandler={rocketNameHandler}
          value={rocketState.rocketName}
        />

        <FormGroup className="rocket-stats">
          <DropdownGroup
            labelText="Successful launches"
            htmlFor="successLaunches"
            dropdownToggleText={rocketState.successLaunch}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={successLaunchHandler}
            dropdownVariant="success"
          />

          <DropdownGroup
            labelText="Failed launches"
            htmlFor="failedLaunches"
            dropdownToggleText={rocketState.failedLaunch}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={failedLaunchHandler}
            dropdownVariant="danger"
          />

          <DropdownGroup
            labelText="Postponed launches"
            htmlFor="postponedLaunches"
            dropdownToggleText={rocketState.postponedLaunch}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={postponedLaunchHandler}
            dropdownVariant="warning"
          />
        </FormGroup>
      </CustomForm>
    </div>
=======
    <React.Fragment>
      {isLoading && (
        <div>
          <h3>Loading data</h3>
        </div>
      )}

      {!isLoading && rocketState && (
        <div className="container">
          <h2 className="display-3">Edit Rocket</h2>
          <CustomForm submitHandler={submitHandler}>
            <ControlGroup
              labelText="Rocket Name"
              htmlFor="rocketName"
              changeHandler={rocketNameHandler}
              value={rocketState.rocketName}
            />

            <DropdownGroup
              labelText="Company"
              htmlFor="companyName"
              dropdownToggleText={rocketState.companyName}
              dropdownChoices={COMPANIES}
              setDropdownState={companyNameHandler}
            />

            <FormGroup className="rocket-stats">
              <DropdownGroup
                labelText="Successful launches"
                htmlFor="successLaunches"
                dropdownToggleText={rocketState.successLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={successLaunchHandler}
                dropdownVariant="success"
              />

              <DropdownGroup
                labelText="Failed launches"
                htmlFor="failedLaunches"
                dropdownToggleText={rocketState.failedLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={failedLaunchHandler}
                dropdownVariant="danger"
              />

              <DropdownGroup
                labelText="Postponed launches"
                htmlFor="postponedLaunches"
                dropdownToggleText={rocketState.postponedLaunch}
                dropdownChoices={ROCKET_STAT_NUMBERS}
                setDropdownState={postponedLaunchHandler}
                dropdownVariant="warning"
              />
            </FormGroup>
          </CustomForm>
        </div>
      )}
    </React.Fragment>
>>>>>>> main
  )
}

export default EditRocket
