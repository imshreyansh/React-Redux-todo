import { ADD_TODO, REMOVE_TODO } from '../action/add'


export default function addTodo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            var obj = action.obj.item

            if (Object.values(action.data).filter(id => id === action.obj.item).length === 0) {
                return {
                    ...state,
                    [action.obj.id]: obj

                }
            } else {
                alert('Already Exist')
                return {
                    ...state
                }
            }


        case REMOVE_TODO:
            Object.entries(state).filter(id => id[0] !== action.id && id[1] !== action.val)
            var val = action.val
            return {
                ...state,
                [action.id]: val

            }
        default:
            return {
                ...state
            }
    }
}