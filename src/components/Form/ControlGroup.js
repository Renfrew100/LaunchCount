import React from "react"
import { Form } from "react-bootstrap"

import FormLabel from "./Label"
import "../../styles/form.css"

const ControlGroup = props => {
  return (
    <Form.Group className="mb-3">
      <FormLabel labelText={props.labelText} htmlFor={props.htmlFor} />
      <Form.Control type="text" id={props.htmlFor} placeholder={props.placeholder} onChange={props.changeHandler} value={props.value}/>
    </Form.Group>
  )
}

export default ControlGroup
