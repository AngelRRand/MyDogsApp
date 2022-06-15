import axios from 'axios'


export function getAllDogs() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:3001/dogs')
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload:  response.data
        })
    }
}

export function searchDogs(name){
    return async function (dispatch){
        var response = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: 'SEARCH_DOG',
            payload: response.data
        })
    }
}

export function detailDogs(id){
    return async function (dispatch){
        var response = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: 'DETAIL_DOG',
            payload: response.data
        })
    }
}

export function alfabeticDogs(payload){
    return {
        type: 'ALFABETIC_DOGS',
        payload
    }
}