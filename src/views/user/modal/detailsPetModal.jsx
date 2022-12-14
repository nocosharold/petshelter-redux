/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Modal, Button } from 'react-bootstrap'
import { petListAction } from "../../../_actions/pet_list.action"
import { bindActionCreators } from 'redux';
/* REDUX */
import { connect } from 'react-redux';

class DetailsPetModal extends Component {
    
    render() { 
        const { showDetailsPetModalState, onHandleHideDetailsModal, selectedPet } = this.props;
        return (
            <Modal show={showDetailsPetModalState} animation={false}>
                <Modal.Header closeButton onClick={() => {onHandleHideDetailsModal()}}>
                <Modal.Title>DETAILS about: {selectedPet.pet_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Pet Type: <span>Cat</span></p>
                </Modal.Body>
                <Modal.Footer>
                <p>{ selectedPet.pet_likes } Likes</p>
                <Button variant="primary">
                    Like { selectedPet.pet_name }
                </Button>
                <Button variant="primary" onClick={ () => { this.props.onHandleDeletePet(selectedPet); onHandleHideDetailsModal(); }}>
                    Adopt { selectedPet.pet_name }
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onHandleDeletePet: petListAction.deletePet,
    }, dispatch);
}

export default connect( null, mapDispatchToProps)(DetailsPetModal);