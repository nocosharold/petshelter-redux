/* REACT */
import React, { Component } from 'react';

/* PLUGINS */

/* COMPONENTS */
import NavBar from '../../user/dashboard/components/navBar';
import PetList from '../../user/dashboard/petList';

/* STYLES */

class UserLayout extends Component {
    render() { 
        return (
            <>
                <NavBar />
                <PetList />
            </>
        );
    }
}
 
export default UserLayout;