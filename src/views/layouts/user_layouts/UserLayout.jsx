/* REACT */
import React, { Component } from 'react';

/* COMPONENTS */
import NavBar from '../../user/dashboard/components/navBar';
import PetList from '../../user/dashboard/petList';
import DetailsPetModal from '../../user/modal/detailsPetModal';

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
        }
    }

    handleShowEditModal = (pet) => {
        this.setState({ 
            display_edit_modal: true, 
            selected_pet: {
                id: pet.id,
                pet_name: pet.pet_name,
                pet_type: pet.pet_type,
                pet_likes: 0
            }
        });
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
        const { selected_pet } = this.state;

        this.setState({  
            selected_pet: {
                ...selected_pet,
                pet_type: pet.target.value
            }
        });
    }

    handleLikePet = () =>{
        const { selected_pet } = this.state;
        this.setState({
            selected_pet: {
                ...selected_pet,
                pet_likes: selected_pet.pet_likes + 1
            }
        });
    }

    render() { 
        const { display_details_modal, selected_pet, selected_pet_type } = this.state;
        return (
            <React.Fragment>
                <NavBar 
                    onShowAddModal={this.handleShowAddModal}
                />
                <PetList 
                    onShowEditModal={this.handleShowEditModal}
                    onShowDetailsModal={this.handleShowDetailsModal}
                />
                <DetailsPetModal 
                    showDetailsPetModalState={ display_details_modal }
                    selectedPet={ selected_pet }
                    selectedPetType={ selected_pet_type }
                    onHandleHideDetailsModal={this.handleHideDetailsModal}
                    onLikePet={this.handleLikePet}
                />
            </React.Fragment>
        );
    }
}

export default UserLayout;