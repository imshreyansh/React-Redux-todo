import { ADD_TODO, REMOVE_TODO } from '../action/add'


export default function addTodo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const obj = action.obj.item
            if (Object.values(action.data).filter(id => id.obj === action.obj.item).length === 0) {
                return {
                    ...state,
                    [action.obj.id]: {
                        obj
                    }

                }
            } else {
                alert('Already Exist')
                return {
                    ...state
                }
            }


        case REMOVE_TODO:
            const rem = Object.values(state).filter(id => id.obj !== action.obj.item)
            console.log(';;;;;', rem)
            return {
                ...state,


            }
        default:
            return {
                ...state
            }
    }
}