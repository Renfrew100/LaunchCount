import React, { useState } from "react"
import { useEffect } from "react"

import ControlGroup from "../../components/Form/ControlGroup"
import DropdownGroup from "../../components/Form/DropDownGroup"
import CustomForm from "../../components/Form/CustomForm"
import FormGroup from "../../components/Form/FormGroup"

import { useRocketReducer } from "../../components/Reducer/RocketReducer"

import axios from 'axios';


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

const COMPANIES = ["SpaceX", "Blue Origin", "NASA"]


const EditRocket = props => {
 // const rocket = ROCKETS.find(rocket => rocket.id === props.params["*"]);
  /* axios
      .post("http://localhost:5000/record/add", rocket)
      .then((res) => console.log(res.data)); */
     
 // const rockets = await sendRequest("http://localhost:5000/record/add")

   // This will get the record based on the id from the database.

   let [loadedRocket, setLoadedRocket] = useState([])

    useEffect(() => {
      axios
      .get("http://localhost:5000/rockets/SpaceX/" + props.params.id)
      .then((response) => {
        setLoadedRocket({
          rocketName: response.data.rocketName,
          companyName: response.data.companyName,
          successLaunch: response.data.successLaunch,
          failedLaunch: response.data.failedLaunch,
          postponedLaunch: response.data.postponedLaunch
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }, [loadedRocket])
 
 // const launches = rocket.launches

/*    const successLaunchList = launches.find(
    launch => launch.category === "success"
  )
  const failedLaunchList = launches.find(
    launch => launch.category === "failures"
  )
  const postponedLaunchList = launches.find(
    launch => launch.category === "postponed"
  ) */
 

  const {
    rocketState,
    companyNameHandler,
    rocketNameHandler,
    successLaunchHandler,
    failedLaunchHandler,
    postponedLaunchHandler,
  } = useRocketReducer({
    rocketName: loadedRocket.name,
    successLaunch: loadedRocket.value,
    failedLaunch: loadedRocket.value,
    postponedLaunch: loadedRocket.value,
  })

  

  const submitHandler = e => {
    e.preventDefault()
    console.log("Edit rocket")

        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        const newrocket = {
          rocketName: rocketState.rocketName,
          companyName: rocketState.companyName,
          successLaunch: rocketState.successLaunch,
          failedLaunch: rocketState.failedLaunch,
          postponedLaunch: rocketState.postponedLaunch
        };
        axios
          .post("http://localhost:5000/record/add", newrocket)
          .then((res) => console.log(res.data));
     
        // We will empty the state after posting the data to the database
  /*       this.setState({
          rocketName: this.rocketState.rocketName,
          companyName: this.rocketState.companyName,
          successLaunch: this.rocketState.successLaunch,
          failedLaunch: this.rocketState.failedLaunch,
          postponedLaunch: this.rocketState.postponedLaunch
        }); */
  
      console.log("Adding rocket")
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
  )
}

export default EditRocket
