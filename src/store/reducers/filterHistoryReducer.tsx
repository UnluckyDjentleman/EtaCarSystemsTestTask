import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import FilterHistory from '../../constants/types/filterHistory'

const initialState: FilterHistory={
    interval: "h6",
    start:  Date.now() - 24 * 60 * 60 * 1000,
    end: Date.now(),
}

export const filterHistoryReducer=createSlice({
    name: 'filterHistory',
    initialState,
    reducers:{
        setInterval:(state, action: PayloadAction<FilterHistory>)=>{
            state.interval=action.payload.interval
        }
    }
})

export const {setInterval} = filterHistoryReducer.actions

export default filterHistoryReducer.reducer;