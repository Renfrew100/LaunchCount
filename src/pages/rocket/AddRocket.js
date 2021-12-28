import React from "react"
<<<<<<< HEAD
=======
import {navigate} from "@reach/router"
>>>>>>> main

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"
<<<<<<< HEAD

import axios from 'axios';
=======
import { useHttpClient } from "../../hooks/http-hook"
>>>>>>> main

const AddRocket = () => {
  const {
    rocketState,
    companyNameHandler,
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  } = useRocketReducer({
    rocketName: "",
    companyName: "SpaceX",
    successLaunch: 0,
    failedLaunch: 0,
    postponedLaunch: 0,
  })

<<<<<<< HEAD
  console.log(rocketState)

  const COMPANIES = ["SpaceX", "Blue Origin", "NASA"]
=======
  const { isLoading, sendRequest } = useHttpClient()

  const COMPANIES = ["SpaceX", "Blue Origin", "Nasa"]
>>>>>>> main

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  const submitHandler = e => {
<<<<<<< HEAD
    e.preventDefault()

      // When post request is sent to the create url, axios will add a new record(newperson) to the database.
      const newrocket = {
        rocketName: this.state.rocketName,
        companyName: this.state.companyName,
        successLaunch: this.state.successLaunch,
        failedLaunch: this.state.failedLaunch,
        postponedLaunch: this.body.postponedLaunch
      };
   
      axios
        .post("http://localhost:5000/record/add", newrocket)
        .then((res) => console.log(res.data));
   
      // We will empty the state after posting the data to the database
      this.setState({
        rocketName: this.state.rocketName,
        companyName: this.state.companyName,
        successLaunch: this.state.successLaunch,
        failedLaunch: this.state.failedLaunch,
        postponedLaunch: this.body.postponedLaunch
      });

    console.log("Adding rocket")
=======
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.

    const newrocket = {
      rocketName: rocketState.rocketName,
      companyName: rocketState.companyName,
      successLaunch: rocketState.successLaunch,
      failedLaunch: rocketState.failedLaunch,
      postponedLaunch: rocketState.postponedLaunch,
    }

    
    sendRequest("http://localhost:5000/rocket/add", "POST", newrocket)
    navigate(`/CompanyPage/${newrocket.companyName}`)
>>>>>>> main
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
  )
}

export default AddRocket
