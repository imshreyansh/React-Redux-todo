export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function addTodo(val, data) {
    const obj = {
        id: generateUID(),
        item: val,
    }
    return {
        type: ADD_TODO,
        obj,
        data
    }
}

export function removeTodo(id, val) {

    return {
        type: REMOVE_TODO,
        id,
        val

    }
}