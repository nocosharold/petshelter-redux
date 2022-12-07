/* REACT */
import React, { Component } from 'react';

/* PLUGINS */

/* COMPONENTS */
import PetList from '../../user/dashboard/petList';

/* STYLES */

class UserLayout extends Component {
    render() { 
        
        return (
            <>
                <PetList />
            </>
        );
    }
}
 
export default UserLayout;