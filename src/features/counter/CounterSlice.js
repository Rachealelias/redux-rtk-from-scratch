import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomDogImage } from "../CounterApi";

const initialState = {
    value: 0,
    status: 'idle',
    image: null
}

export const fetchRandomDogImageAsync = createAsyncThunk(
    'counter/fetchRandomDogImage',
    async () => {
        const response = await fetchRandomDogImage()
        return response
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {state.value++},
        decrement: state => {state.value--},
        reset: state => {state.value = 0},
        incrementByAmount: (state, action) => {state.value += action.payload},
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchRandomDogImageAsync.pending, (state) =>{
            state.status = 'loading'
        })
        .addCase(fetchRandomDogImageAsync.fulfilled, (state, action) =>{
            state.image= action.payload
            state.status = 'idle'

        })
        .addCase(fetchRandomDogImageAsync.rejected, (state) =>{
            state.status = 'rejected'
        })
    }
})
export default counterSlice.reducer
export const {increment, decrement, reset, incrementByAmount} =counterSlice.actions