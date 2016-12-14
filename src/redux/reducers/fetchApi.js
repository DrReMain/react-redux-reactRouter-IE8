import * as Types from '../constants/actionTypes';
import * as Actions from '../actions';
// import objectAssign from 'object-assign';

const initialState = {
    json: 'empty'
}

export default function fetchApi(state = initialState, action) {
    switch (action.type) {
        case Types.FETCH_GITHUB:
            console.log('start fetch in action')
            fetch(action.url)
                .then((res) => res.json())
                .then((res) => {
                    console.log(JSON.stringify(res))
                }).catch(function (err) {
                console.log('parsing failed', err)
            })

            return {
                ...state, json: action.url
            }


        default:
            return state;
    }
}