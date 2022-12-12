/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Form, Modal, Button } from 'react-bootstrap'

/* REDUX */
import { connect } from 'react-redux';

class AddPetModal extends Component {
    render() { 
        const { showAddPetModalState, onHandleHideAddModal } = this.props;
        return (
            <Modal show={showAddPetModalState} animation={false}>
                <Modal.Header closeButton onClick={() => {onHandleHideAddModal()}}>
                <Modal.Title>ADD Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control type="text" placeholder="Pet Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Select >
                            <option>Pet Type</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => { this.props.addPet()}}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPet: () => dispatch({ type: 'ADD_PET' }),
    }
}

export default connect(
    mapDispatchToProps()
)(AddPetModal);