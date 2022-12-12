/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Modal, Button } from 'react-bootstrap'


class EditPetModal extends Component {
    
    render() { 
        const { showEditPetModalState, onHandleHideEditModal} = this.props;
        return (
            <Modal show={ showEditPetModalState } animation={false}>
                <Modal.Header closeButton onClick={() => { onHandleHideEditModal()} }>
                <Modal.Title>EDIT Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditPetModal;