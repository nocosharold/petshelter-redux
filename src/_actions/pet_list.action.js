import { fetchSelectedPets } from "../_reducers/pet_list.reducer"

/**
* DOCU: Sample Comment. <br>
* Last Updated Date: December 07, 2022
* @author Ruel, Jadee Updated by Harold
*/
export const PetListActions = {
    /**
    * DOCU: Sample Comment. <br>
    * Triggered: Sample Trigger. <br>
    * Last Updated Date: December 07, 2022
    * @function
    * @memberof PetListActions
    * @author Ruel, Jadee Updated by Harold
    */
    fetchPets: (params) => {
        return (dispatcher) => {
            dispatcher(fetchSelectedPets(params));
        }
    },
}