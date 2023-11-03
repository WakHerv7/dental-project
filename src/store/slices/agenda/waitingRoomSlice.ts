import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_BASE_NAME } from './constants';
import axios from "axios";

// const WAITING_ROOM_URL = process.env.REACT_APP_API_URL+'/waiting-room';
const WAITING_ROOM_URL = 'http://localhost:8080/waiting-room';

// *******************************************************************************
export const fetchWaitingRoom = createAsyncThunk('waitingRoom/fetchWaitingRoom', async () => {
    try {
        const response = await axios.get(WAITING_ROOM_URL)
        return [...response.data];
    } catch (err: any) {
        return err.message;
    }
})

export const fetchWaitingRoomItemById = createAsyncThunk('waitingRoom/fetchWaitingRoomItemById', async (initialWaitingRoomItem: { id: string }) => {
    const { id } = initialWaitingRoomItem;
    try {
        const response = await axios.get(`${WAITING_ROOM_URL}/${id}`)
        return [...response.data];
    } catch (err: any) {
        return err.message;
    }
})
// *******************************************************************************

export interface WaitingRoomState {
    waitingRoom: boolean[]
    status: string | null
    error: string | null 
}
const initialState: WaitingRoomState = {
    waitingRoom: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null 
}

const waitingRoomSlice = createSlice({
    name: `${SLICE_BASE_NAME}/waitingRoomItem`,
    initialState,
    reducers: {
        waitingRoomItemAdded(state, action) {
                state.waitingRoom.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWaitingRoom.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWaitingRoom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.waitingRoom = action.payload
            })
            .addCase(fetchWaitingRoom.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? null
            })
    }
})

export const selectAllWaitingRoom = (state: any) => state.waitingRoom.waitingRoom;

export const {waitingRoomItemAdded} = waitingRoomSlice.actions;

export default waitingRoomSlice.reducer
