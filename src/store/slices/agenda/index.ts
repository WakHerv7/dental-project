import { combineReducers } from '@reduxjs/toolkit'
import task, { TaskState } from './taskSlice'
import waitingRoom, { WaitingRoomState } from './waitingRoomSlice'

const reducer = combineReducers({
    task,
    waitingRoom,
})

export type AgendaState = {
    task: TaskState
    waitingRoom: WaitingRoomState
}

export * from './taskSlice'
export * from './waitingRoomSlice'

export default reducer
