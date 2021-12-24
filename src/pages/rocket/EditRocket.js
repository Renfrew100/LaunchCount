import React, { useState } from "react"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

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

  const [rocketName, setRocketNameState] = useState("")
  const [successLaunches, setSuccessLaunches] = useState(
    successLaunchList.value
  )
  const [failedLaunches, setFailedLaunches] = useState(failedLaunchList.value)
  const [postponedLaunches, setPostponedLaunches] = useState(
    postponedLaunchList.value
  )

  const submitHandler = e => {
    e.preventDefault()
    console.log("Edit rocket")
  }

  const changeHandler = e => {
    setRocketNameState(e.target.value)
  }

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  return (
    <div className="container">
      <h2 className="display-3">Edit Rocket</h2>
      <CustomForm submitHandler={submitHandler}>
        <ControlGroup
          labelText="Rocket Name"
          htmlFor="rocketName"
          placeholder={rocket.name}
          changeHandler={changeHandler}
          value={rocketName}
        />

        <FormGroup className="rocket-stats">
          <DropdownGroup
            labelText="Successful launches"
            htmlFor="successLaunches"
            dropdownToggleText={successLaunches}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={setSuccessLaunches}
            dropdownVariant="success"
          />

          <DropdownGroup
            labelText="Failed launches"
            htmlFor="failedLaunches"
            dropdownToggleText={failedLaunches}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={setFailedLaunches}
            dropdownVariant="danger"
          />

          <DropdownGroup
            labelText="Postponsed launches"
            htmlFor="postponedLaunches"
            dropdownToggleText={postponedLaunches}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={setPostponedLaunches}
            dropdownVariant="warning"
          />
        </FormGroup>
      </CustomForm>
    </div>
  )
}

export default EditRocket
