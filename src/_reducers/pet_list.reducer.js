import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pets: [
        { id: 1, pet_name: "Garfield", pet_type: "Cat", pet_likes: 0 },
        { id: 2, pet_name: "Doraemon", pet_type: "Cat", pet_likes: 0 },
        { id: 3, pet_name: "Snoopy", pet_type: "Dog", pet_likes: 0 },
        { id: 4, pet_name: "Dug", pet_type: "Dog", pet_likes: 0 },
        { id: 5, pet_name: "Daffy", pet_type: "Duck", pet_likes: 0 },
        { id: 6, pet_name: "Pen Pen", pet_type: "Penguin", pet_likes: 0 },
    ]
}

export const pet_list = createSlice({
    name: "pet_list",
    initialState,
    reducers: {
        addPet: (state, action) => {
            action.payload.id = state.pets.length += 1;
            state.pets.push(action.payload);
        },
        deletePet: (state, action) => {
            state.pets = state.pets.filter((pet) => pet.id !== action.payload.id)
        },
        editPet: (state, action) => {
            state.pets = state.pets.map((pet) => {
                if(pet.id === action.payload.id){
                    pet.pet_type = action.payload.pet_type
                }
                return pet
            });
        }
    },
});


export const { addPet, deletePet, editPet } = pet_list.actions;
export default pet_list.reducer;