import React from "react"
import uuid from "react-uuid"
import { navigate } from "gatsby"

import Button from "../components/Button"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/mainPage.css"

const ORIGINZATIONS = [
  {
    name: "SpaceX",
    imageURL: "http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png",
  },
  {
    name: "Blue Origin",
    imageURL:
      "https://www.flexjet.com/wp-content/uploads/2021/09/FX_BlueOriginLogo.png",
  },
  {
    name: "Nasa",
    imageURL:
      "https://www.pngkey.com/png/full/481-4819402_nasa-logo-png-transparent-logo-nasa-hd-png.png",
  },
]

const companyClickHandler = company => {
  company = company.replace(" ", "")
  navigate(`/CompanyPage/${company}`)
}

const MainPage = () => {
  return (
    <div className="container">
      <h1 className="display-2">Rocket Launch Counter</h1>
      <div className="button-group">
        {ORIGINZATIONS.map(org => {
          return (
            <Button key={uuid()}
              className="main-page-btn"
              onClick={() => {
                companyClickHandler(`${org.name}`)
              }}
            >
              <h4 className="display-5">{org.name}</h4>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default MainPage
