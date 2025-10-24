import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState } from "../../types/Car";

interface CarsState {
    filters: FilterState
}

const initialState: CarsState = {
    filters: {
        brand: '',
        country: '',
        minPrice: 0
    }
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<Partial<FilterState>>) {
            state.filters = {...state.filters, ...action.payload}
        }
    }
})

export const {setFilters} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;