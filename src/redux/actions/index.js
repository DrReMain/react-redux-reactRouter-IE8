import * as types from '../constants/actionTypes'

export function addTodo(text) {
    return {type: types.ADD_TODO, text}
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id}
}




export function fetchGithub(url) {
    return {type: types.FETCH_GITHUB, url}
}