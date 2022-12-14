import { addPet, deletePet, editPet } from "../_reducers/pet_list.reducer"

export const petListAction = {
    addPet: (pet_details) => {
        return (dispatcher) => {
            dispatcher(addPet(pet_details));
        }
    },
    deletePet: (pet_details) => {
        return (dispatcher) => {
            dispatcher(deletePet(pet_details));
        }
    },
    editPet: (pet_details) => {
        return (dispatcher) => {
            dispatcher(editPet(pet_details));
        }
    }
}