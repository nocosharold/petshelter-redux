import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    pets: [
        { _id: "5b21ca3eeb7f6fbccd471815", pet_name: "Garfield", pet_type: "Cat", likes: 0 },
        { _id: "5b21ca3eeb7f6fbccd471816", pet_name: "Doraemon", pet_type: "Cat", likes: 0 },
        { _id: "5b21ca3eeb7f6fbccd471817", pet_name: "Snoopy", pet_type: "Dog", likes: 0 },
        { _id: "5b21ca3eeb7f6fbccd471819", pet_name: "Dug", pet_type: "Dog", likes: 0 },
        { _id: "5b21ca3eeb7f6fbccd47181a", pet_name: "Daffy", pet_type: "Duck", likes: 0 },
        { _id: "5b21ca3eeb7f6fbccd47181b", pet_name: "Pen Pen", pet_type: "Penguin", likes: 0 },
    ]
}

export const pet_list = createSlice({
    name: "pet_list",
    initialState,
    reducers: {
        fetchSelectedPets: (state, action) => {
            state.pets = state.pets[action.payload];
        },

        addPet: (state, action) => {
            const pet = {...state.pets,
                _id: uuidv4(),
                pet_name: action.payload.pet_name,
                pet_type: action.payload.pet_type,
                likes: 0
            };
            state.push(pet);
        }
    },
});

export const { fetchSelectedPets } = pet_list.actions;
export default pet_list.reducer;