import React from "react"
import uuid from "react-uuid"
import { navigate } from "gatsby"

import Image from "../shared/Image"
import Button from "../shared/Button"

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

const companyClickHandlder = (company) => {
  company = company.replace(" ", "");
  navigate(`/CompanyPage/${company}`);
}

const createColumns = () => {
  return ORIGINZATIONS.map(org => (
    <div key={uuid()} className="col-md-4 col-sm-6 column">
      <Button onClick={() => {companyClickHandlder(org.name)}}>
        <Image image={org.imageURL} title={org.name} />
      </Button>
    </div>
  ))
}

const MainPage = () => {
  return <div className="row">{createColumns()}</div>
}

export default MainPage
