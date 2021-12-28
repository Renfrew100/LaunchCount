import React from "react"
import { Modal } from "react-bootstrap"
import Button from "./Button"

<<<<<<< HEAD
const CustomModal = ({modalState, hideHandler, rocketName}) => {
=======
const CustomModal = ({modalState, hideHandler, rocketName, buttonHandler}) => {
>>>>>>> main
  return (
    <Modal show={modalState} onHide={hideHandler}>
      <Modal.Body>
        <h6 className="display-6">{`Confirm deletion of rocket ${rocketName}`}</h6>
<<<<<<< HEAD
        <Button className="red-inverse modal__close" onClick={hideHandler}>
=======
        <Button className="red-inverse modal__close" onClick={buttonHandler}>
>>>>>>> main
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
