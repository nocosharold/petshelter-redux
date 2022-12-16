/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Form, Modal, Button } from 'react-bootstrap'
import { petListAction } from "../../../_actions/pet_list.action"
import { bindActionCreators } from 'redux';

/* REDUX */
import { connect } from 'react-redux';

class EditPetModal extends Component {
    render() { 
        const { showEditPetModalState, onHandleHideEditModal, selectedPet, onChangePetType } = this.props;
        const { pet_name, pet_type } = selectedPet;

        const EditPet = () => {
            this.props.onHandleEdiPet(selectedPet); 
            onHandleHideEditModal();
        }

        return (
            <Modal show={ showEditPetModalState } animation={false}>
                <Modal.Header closeButton onClick={ () => { onHandleHideEditModal() } }>
                <Modal.Title>EDIT Details: { pet_name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Select onChange={ (event) => { onChangePetType(event) } } value={ pet_type }>
                                <option>Pig</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Duck</option>
                                <option>Penguin</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={ () => { EditPet(); }}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onHandleEdiPet: petListAction.editPet,
    }, dispatch);
}

export default connect( null, mapDispatchToProps)(EditPetModal);