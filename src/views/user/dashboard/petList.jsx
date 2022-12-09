/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import { Table, Button  } from 'react-bootstrap';

/* REDUX */
import { connect } from 'react-redux';

/* ACTIONS */
import { fetchPets } from '../../../_actions/pet_list.action'

/* STYLES */
import "./petList.scss";

class PetList extends Component {
    
    render() {
        const { pets } = this.props;
        return (
            <>
                <Table>
                    <tbody>
                        {pets['pets'].map(pet => 
                        <tr key={pet._id}> 
                            <td>{pet.pet_name}</td>
                            <td>{pet.pet_type}</td>
                            <td>
                                <Button className="btn_actions">Details</Button>
                                <Button className="btn_actions btn_edit">Edit</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
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

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
)(PetList);