import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_BASE_NAME } from './constants';
import axios from "axios";
import { RootState } from '@/store/rootReducer';
// const TASKS_URL = process.env.REACT_APP_API_URL+'/task';
const TASKS_URL = 'http://localhost:8080/task';

// *******************************************************************************
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        const response = await axios.get(TASKS_URL)
        return [...response.data];
    } catch (err: any) {
        return err.message;
    }
})

export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', async (initialTask: { id: string }) => {
    const { id } = initialTask;
    try {
        const response = await axios.get(`${TASKS_URL}/${id}`)
        return [...response.data];
    } catch (err: any) {
        return err.message;
    }
})
// *******************************************************************************

export interface TaskState {
    tasks: any[]
    status: string | null
    error: string | null 
}
const initialState: TaskState = {
    tasks: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null 
}

const taskSlice = createSlice({
    // name: `${SLICE_BASE_NAME}/task`,
    name: `tasks`,
    initialState,
    reducers: {
        taskAdded(state, action) {
                state.tasks.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? null
            })
    }
})

export const selectAllTasks = (state: RootState) => state.agenda.task.tasks;
export const getTasksStatus = (state: RootState) => state.agenda.task.status;
export const getTasksError = (state: RootState) => state.agenda.task.error;

export const selectTaskById = (state: any, aId: number) =>  state.tasks.tasks.find((a:any) => a.id === aId);
export const {taskAdded} = taskSlice.actions;

export default taskSlice.reducer
