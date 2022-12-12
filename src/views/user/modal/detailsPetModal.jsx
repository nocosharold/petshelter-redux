/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Modal, Button } from 'react-bootstrap'


class DetailsPetModal extends Component {
    
    render() { 
        const { showDetailsPetModalState, onHandleHideDetailsModal } = this.props;
        return (
            <Modal show={showDetailsPetModalState} animation={false}>
                <Modal.Header closeButton onClick={() => {onHandleHideDetailsModal()}}>
                <Modal.Title>DETAILS Modal heading</Modal.Title>
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

export default DetailsPetModal;