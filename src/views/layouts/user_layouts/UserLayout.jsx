/* REACT */
import React, { Component } from 'react';

/* PLUGINS */

/* COMPONENTS */
import NavBar from '../../user/dashboard/components/navBar';
import PetList from '../../user/dashboard/petList';
import AddPetModal from '../../user/modal/addPetModal';
import EditPetModal from '../../user/modal/editPetModal';
import DetailsPetModal from '../../user/modal/detailsPetModal';

/* STYLES */

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_add_modal: false,
            display_edit_modal: false,
            display_details_modal: false,
            selected_pet: {
                id: 0,
                pet_name: "",
                pet_type: "",
                pet_likes: 0
            },
            selected_pet_name: "",
            selected_pet_type: ""
        }
    }

    handleShowAddModal = () => {
        this.setState({ display_add_modal: true });
    }

    handleHideAddModal = () => {
        this.setState({ display_add_modal: false });
    }

    handleShowEditModal = (pet) => {
        this.setState({ display_edit_modal: true, selected_pet: pet, selected_pet_name: pet.pet_name, selected_pet_type: pet.pet_type });
    }

    handleHideEditModal = () => {
        this.setState({ display_edit_modal: false });
    }
    
    handleShowDetailsModal = (pet) => {
        this.setState({ display_details_modal: true, selected_pet: pet });
    }

    handleHideDetailsModal = () => {
        this.setState({ display_details_modal: false });
    }

    handleChangePetType = (pet) => {
        this.setState({  
            // selected_pet_type: pet.target.value,
            selected_pet: { 
                id: pet.id,
                pet_name: pet.pet_name,
                pet_type: pet.target.value,
            }
        })
    }

    render() { 
        const { display_add_modal, display_edit_modal, display_details_modal, selected_pet, selected_pet_type } = this.state
        return (
            <>
                <NavBar 
                    handleShowAddModal={this.handleShowAddModal}
                />
                <PetList 
                    handleShowEditModal={this.handleShowEditModal}
                    handleShowDetailsModal={this.handleShowDetailsModal}
                />
                <AddPetModal 
                    showAddPetModalState={ display_add_modal }
                    onHandleHideAddModal={this.handleHideAddModal}
                />
                <EditPetModal 
                    showEditPetModalState={ display_edit_modal }
                    selectedPet={ selected_pet }
                    onChangePetType={this.handleChangePetType}
                    onHandleHideEditModal={this.handleHideEditModal}
                />
                <DetailsPetModal 
                    showDetailsPetModalState={ display_details_modal }
                    selectedPet={ selected_pet }
                    selectedPetType={ selected_pet_type }
                    onHandleHideDetailsModal={this.handleHideDetailsModal}
                />
            </>
        );
    }
}
 
export default UserLayout;