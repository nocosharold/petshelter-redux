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
        const { pet_name, pet_type, pet_likes } = selectedPet;

        return (
            <Modal show={ showDetailsPetModalState } animation={false}>
                <Modal.Header closeButton onClick={() => { onHandleHideDetailsModal() }}>
                <Modal.Title>DETAILS about: {pet_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Pet Type: <span>{pet_type}</span></p>
                </Modal.Body>
                <Modal.Footer>
                    <p>{ pet_likes } Likes</p>
                    <Button variant="primary" disabled={ pet_likes } onClick={()=>{ onLikePet() }}>
                        Like { pet_name }
                    </Button>
                <Button variant="primary" onClick={() => { this.props.onDeletePet(selectedPet); onHandleHideDetailsModal(); }}>
                    Adopt { pet_name }
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