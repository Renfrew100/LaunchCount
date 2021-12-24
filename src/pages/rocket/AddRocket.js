import React from "react"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"

const AddRocket = () => {
  const {
    rocketState,
    companyNameHandler,
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  } = useRocketReducer({
    companyName: "SpaceX",
    successLaunch: 0,
    failedLaunch: 0,
    postponedLaunch: 0,
  })

  const COMPANIES = ["SpaceX", "Blue Origin", "NASA"]

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log("Adding rocket")
  }

  return (
    <div className="container">
      <h2 className="display-3">Add Rocket</h2>
      <CustomForm submitHandler={submitHandler}>
        <ControlGroup
          labelText="Rocket Name"
          htmlFor="rocketName"
          placeholder="Rocket Name"
          changeHandler={rocketNameHandler}
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
            labelText="Postphoned launches"
            htmlFor="postphonedLaunches"
            dropdownToggleText={rocketState.postponedLaunch}
            dropdownChoices={ROCKET_STAT_NUMBERS}
            setDropdownState={postponedLaunchHandler}
            dropdownVariant="warning"
          />
        </FormGroup>
      </CustomForm>
    </div>
  )
}

export default AddRocket
