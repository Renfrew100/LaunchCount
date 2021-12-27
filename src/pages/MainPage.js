import React from "react"
import uuid from "react-uuid"
import { navigate } from "gatsby"

import Button from "../components/Button"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/mainPage.css"

const ORIGINZATIONS = ["SpaceX", "Blue Origin", "NASA"]

const companyClickHandler = company => {
  // company = company.replace(" ", "")
  navigate(`/CompanyPage/${company}`)
}

const MainPage = () => {
  return (
    <div className="container">
      <h1 className="display-2">Rocket Launch Counter</h1>
      <div>
        {ORIGINZATIONS.map(org => {
          return (
            <Button key={uuid()}
              className="red-inverse"
              onClick={() => {
                companyClickHandler(`${org}`)
              }}
            >
              <h4 className="display-5">{org}</h4>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage
