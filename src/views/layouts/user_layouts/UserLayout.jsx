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
            pet_data: {
                id: "",
                pet_name: "",
                pet_type: "",
                pet_likes: 0
            }
        }
    }

    handleShowAddModal = () => {
        this.setState({ display_add_modal: true });
    }

    handleHideAddModal = () => {
        this.setState({ display_add_modal: false });
    }

    handleShowEditModal = () => {
        this.setState({ display_edit_modal: true });
    }

    handleHideEditModal = () => {
        this.setState({ display_edit_modal: false });
    }
    
    handleShowDetailsModal = () => {
        this.setState({ display_details_modal: true });
    }

    handleHideDetailsModal = () => {
        this.setState({ display_details_modal: false });
    }

    render() { 
        const { display_add_modal, display_edit_modal, display_details_modal } = this.state
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
                    onHandleHideEditModal={this.handleHideEditModal}
                />
                <DetailsPetModal 
                    showDetailsPetModalState={ display_details_modal }
                    onHandleHideDetailsModal={this.handleHideDetailsModal}
                />
            </>
        );
    }
}
 
export default UserLayout;