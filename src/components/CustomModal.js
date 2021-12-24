import React from "react"
import { Modal } from "react-bootstrap"
import Button from "./Button"

const CustomModal = ({modalState, hideHandler, rocketName}) => {
  return (
    <Modal show={modalState} onHide={hideHandler}>
      <Modal.Body>
        <h6 className="display-6">{`Confirm deletion of rocket ${rocketName}`}</h6>
        <Button className="red-inverse modal__close" onClick={hideHandler}>
          Delete
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
