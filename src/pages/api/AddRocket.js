import React, { useState } from "react"
import { Form } from "react-bootstrap"

import Button from "../../components/Button"
import CustomDropdown from "../../components/CustomDropdown"

import "../../styles/form.css"

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

  return (
    <div className="container">
      <h2 className="display-3">Add Rocket</h2>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rocketName">
            <h6 className="display-6">Rocket Name</h6>
          </Form.Label>
          <Form.Control type="text" id="rocketName" placeholder="Rocket Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="companyName">
            <h6 className="display-6">Company</h6>
          </Form.Label>
          <CustomDropdown
            dropdownToggleText={companyName}
            dropdownChoices={COMPANIES}
            setState={setCompanyName}
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

export default AddRocket
