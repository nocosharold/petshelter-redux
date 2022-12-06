import { configureStore } from '@reduxjs/toolkit'

import petListReducer from '../src/_reducers/pet_list.reducer'

export const store = configureStore({
    reducer: {
        pets: petListReducer,
    },
});
