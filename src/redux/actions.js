export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const deleteTask = (task) => ({
    type: DELETE_TASK,
    payload: task
})

export const completedTask = (task) => ({
    type: COMPLETE_TASK,
    payload: task
})