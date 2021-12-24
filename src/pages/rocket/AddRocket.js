import React, { useState } from "react"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

const AddRocket = () => {
  const [companyName, setCompanyName] = useState("SpaceX")
  const [successLaunches, setSuccessLaunches] = useState(0)
  const [failedLaunches, setFailedLaunches] = useState(0)
  const [postponedLaunches, setPostponedLaunches] = useState(0)

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
        <ControlGroup labelText="Rocket Name" htmlFor="rocketName" placeholder="Rocket Name"/>

        <DropdownGroup
          labelText="Company"
          htmlFor="companyName"
          dropdownToggleText={companyName}
          dropdownChoices={COMPANIES}
          setDropdownState={setCompanyName}
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

export default AddRocket
