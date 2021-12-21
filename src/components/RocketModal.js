import React from "react"
import { Modal } from "react-bootstrap"
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';


import Button from "../shared/Button"

import "../styles/modal.css"

const RocketModal = ({ modalState, hideHandler, rocketName, rocketData }) => {
  
  return (
    <Modal show={modalState} onHide={hideHandler}>
      <Modal.Header className="modal__header">
        <Button
          className={"btn-close modal__close"}
          onClick={hideHandler}
        ></Button>
        {rocketName} Launch History
      </Modal.Header>
      <Modal.Body>
        <Pie data={rocketData} />
      </Modal.Body>
    </Modal>
  )
}

export default RocketModal
