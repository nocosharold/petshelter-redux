/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Form, Button, Container } from 'react-bootstrap'
import { petListAction } from "../../../_actions/pet_list.action"
import { bindActionCreators } from 'redux';

/* REDUX */
import { connect } from 'react-redux';

class EditPet extends Component {
    render() { 
        const { selectedPet, onChangePetType } = this.props;
        // const { pet_name, pet_type } = selectedPet;
        console.log(selectedPet)
        return (
            <Container>
                {/* <h1>EDIT Details: { pet_name }</h1> */}
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Pet Type</Form.Label>
                        {/* <Form.Select onChange={ (event) => { onChangePetType(event) } } value={ pet_type }> */}
                        <Form.Select onChange={ (event) => { onChangePetType(event) } }>
                            <option>Pig</option>
                            <option>Cat</option>
                            <option>Dog</option>
                            <option>Duck</option>
                            <option>Penguin</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={ () => { this.props.onHandleEdiPet(selectedPet); }}>
                    Save Changes
                </Button>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onHandleEdiPet: petListAction.editPet,
    }, dispatch);
}

export default connect( null, mapDispatchToProps)(EditPet);