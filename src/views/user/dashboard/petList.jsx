/* REACT */
import React, { Component } from 'react';

/* PLUGINS */
import { Table, Button  } from 'react-bootstrap';

/* REDUX */
import { connect } from 'react-redux';

/* STYLES */
import "./petList.scss";

class PetList extends Component {
    render() {
        const { pets, onShowDetailsModal, onShowEditModal } = this.props;
        return (
            <React.Fragment>
                <Table>
                    <tbody>
                        {pets['pets'].map(pet => 
                        <tr key={pet.id}> 
                            <td>{pet.pet_name}</td>
                            <td>{pet.pet_type}</td>
                            <td>
                                <Button className="btn_actions" onClick={ () => { onShowDetailsModal(pet) }}>Details</Button>
                                <Button className="btn_actions btn_edit" onClick={ () => { onShowEditModal(pet) }}>Edit</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    pets: state.pets
});

export default connect( 
    mapStateToProps
)(PetList);