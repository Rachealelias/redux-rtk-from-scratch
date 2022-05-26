import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {state.value++},
        decrement: state => {state.value--},
        reset: state => {state.value = 0},
        incrementByAmount: (state, action) => {state.value += action.payload},
    }
})
export default counterSlice.reducer
export const {increment, decrement, reset, incrementByAmount} =counterSlice.actions