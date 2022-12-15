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
        const { showDetailsPetModalState, onHandleHideDetailsModal, selectedPet, onLikePet } = this.props;
        console.log(selectedPet)
        return (
            <Modal show={ showDetailsPetModalState } animation={false}>
                <Modal.Header closeButton onClick={() => {onHandleHideDetailsModal()}}>
                <Modal.Title>DETAILS about: {selectedPet.pet_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Pet Type: <span>{selectedPet.pet_type}</span></p>
                </Modal.Body>
                <Modal.Footer>
                    <p>{ selectedPet.pet_likes } Likes</p>
                    <Button variant="primary" disabled={selectedPet.pet_likes} onClick={()=>{ onLikePet()}}>
                        Like { selectedPet.pet_name }
                    </Button>
                <Button variant="primary" onClick={() => { this.props.onDeletePet(selectedPet); onHandleHideDetailsModal(); }}>
                    Adopt { selectedPet.pet_name }
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onDeletePet: petListAction.deletePet,
    }, dispatch);
}

export default connect( null, mapDispatchToProps)(DetailsPetModal);