import React, {useState} from "react"
import { Form } from "react-bootstrap"

import Button from "../../components/Button"
import CustomDropdown from "../../components/CustomDropdown"

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

  console.log(launches);
  const successLaunchList = launches.find(launch => launch.category === "success")
  const failedLaunchList = launches.find(launch => launch.category === "failures")
  const postponedLaunchList = launches.find(launch => launch.category === "postponed")

  const [rocketName, setRocketNameState] = useState(rocket.name)
  const [successLaunches, setSuccessLaunches] = useState(successLaunchList.value)
  const [failedLaunches, setFailedLaunches] = useState(failedLaunchList.value)
  const [postponedLaunches, setPostponedLaunches] = useState(postponedLaunchList.value)

  const submitHandler = e => {
    e.preventDefault()
    console.log("Edit rocket")
  }

  // create the list for the rocket stat dropdowns
  let ROCKET_STAT_NUMBERS = []
  for (let i = 0; i < 100; i++) {
    ROCKET_STAT_NUMBERS.push(i)
  }

  return (
    <div className="container">
      <h2 className="display-3">Edit Rocket</h2>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rocketName">
            <h6 className="display-6">Rocket Name</h6>
          </Form.Label>
          <Form.Control
            type="text"
            id="rocketName"
            value={rocketName || "BAD"}
          />
        </Form.Group>

        <Form.Group className="mb-3 rocket-stats">
          <Form.Group>
            <Form.Label htmlFor="successLaunches">
              <h6 className="display-6">Successful launches</h6>
            </Form.Label>
            <CustomDropdown
              dropdownToggleText={successLaunches}
              dropdownChoices={ROCKET_STAT_NUMBERS}
              setState={setSuccessLaunches}
              dropdownVariant="success"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="failedLaunches">
              <h6 className="display-6">Failed launches</h6>
            </Form.Label>
            <CustomDropdown
              dropdownToggleText={failedLaunches}
              dropdownChoices={ROCKET_STAT_NUMBERS}
              setState={setFailedLaunches}
              dropdownVariant="danger"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="postponedLaunches">
              <h6 className="display-6">Postponsed launches</h6>
            </Form.Label>
            <CustomDropdown
              dropdownToggleText={postponedLaunches}
              dropdownChoices={ROCKET_STAT_NUMBERS}
              setState={setPostponedLaunches}
              dropdownVariant="warning"
            />
          </Form.Group>
        </Form.Group>

        <Button type="submit" className="blue-inverse form-submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EditRocket
