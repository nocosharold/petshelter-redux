/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Form, Modal, Button } from 'react-bootstrap'
import { petListAction } from "../../../_actions/pet_list.action"
import { bindActionCreators } from 'redux';

/* REDUX */
import { connect } from 'react-redux';

class AddPetModal extends Component {
    constructor(props) {
    super(props);
        this.state = {
            pet_name: "",
            pet_type: "Pig",
            pet_likes: 0,
        }
    }
    
    render() { 
        const { showAddPetModalState, onHideAddModal } = this.props;
        return (
            <Modal show={showAddPetModalState} animation={false}>
                <Modal.Header closeButton onClick={() => {onHideAddModal()}}>
                <Modal.Title>ADD Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Pet Name</Form.Label>
                            <Form.Control type="text" placeholder="Pet Name" onChange={(event) => { this.setState({ ...this.state, pet_name: event.target.value} )} } value={this.state.pet_name}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Select onChange={ (event) => { this.setState({ ...this.state, pet_type: event.target.value }) } } value={ this.state.pet_type }>
                                <option>Pig</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Duck</option>
                                <option>Penguin</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" onClick={ () => { this.props.onAddPet(this.state); onHideAddModal(); }} >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onAddPet: petListAction.addPet,
    }, dispatch);
}

export default connect( null, mapDispatchToProps)(AddPetModal);