import React, {useState} from 'react';

import Button from "../shared/Button"
import RocketModal from "../components/RocketModal"
import data from "./rockets.json"

const RocketItem = ({ imageURL, name }) => {
    const [modalState, setModalState] = useState(false)
    const showModal = () => {
      setModalState(true);
    }
  
    const hideModal = () => {
      setModalState(false);
    }

    return (
        <div className="card col-md-4 col-sm-6">
          <img
            className="card-img-top"
            src={imageURL}
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title display-5">{name}</h5>
            <RocketModal modalState={modalState} hideHandler={hideModal} rocketName={name} rocketData={data}/>
            <Button className={"btn inverse"} onClick={showModal}>
              Rocket Specs
            </Button>
          </div>
        </div>
    );
}

export default RocketItem;
