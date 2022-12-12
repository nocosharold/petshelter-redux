export const addPet = (pet_details) => {
    return {
        type: "ADD_PETS",
        payload: pet_details
    }
}