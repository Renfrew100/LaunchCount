import React from "react"

import "../styles/button.css"

const Button = props => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  )
}

export default Button
