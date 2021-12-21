import React from "react"

import "../styles/image.css"

const Image = props => {
  return <img src={props.image} alt={props.title} />
}

export default Image
