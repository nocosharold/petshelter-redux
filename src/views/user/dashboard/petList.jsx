/* REACT */
import React, { Component } from 'react';
import { Table, Button  } from 'react-bootstrap';

/* COMPONENTS */

/* REDUX */
import { connect } from 'react-redux';

/* ACTIONS */

/* STYLES */
import "./petList.scss";

class PetList extends Component {
    render() {
        const { pets, handleShowDetailsModal, handleShowEditModal } = this.props;
        return (
            <>
                <Table>
                    <tbody>
                        {pets['pets'].map(pet => 
                        <tr key={pet._id}> 
                            <td>{pet.pet_name}</td>
                            <td>{pet.pet_type}</td>
                            <td>
                                <Button className="btn_actions" onClick={() => { handleShowDetailsModal() }}>Details</Button>
                                <Button className="btn_actions btn_edit" onClick={() => { handleShowEditModal() }}>Edit</Button>
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

export default connect( 
    mapStateToProps
)(PetList);