/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { ListGroup  } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchPets } from '../../../_actions/pet_list.action'

class PetList extends Component {
    
    render() {
        return (
            <>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </>
        );
    }
}

const mapStateToProps = state => ({
    pets: state.pets
});

const mapDispatchToProps = (dispatch, pet) => ({ 
    fetchPets: () => dispatch(fetchPets(pet))
});

export default connect( mapStateToProps, mapDispatchToProps)(PetList);