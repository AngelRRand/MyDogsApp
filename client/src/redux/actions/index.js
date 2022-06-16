import axios from 'axios'


export function getAllDogs() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:3001/dogs')
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload: response.data
        })
    }
}

export function searchDogs(name) {
    return async function (dispatch) {
        var response = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: 'SEARCH_DOG',
            payload: response.data
        })
    }
}

export function detailDogs(id) {
    return async function (dispatch) {
        var response = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: 'DETAIL_DOG',
            payload: response.data
        })
    }
}

export function alfabeticDogs(payload) {
    return {
        type: 'ALFABETIC_DOGS',
        payload
    }
}

export function weigthDogs(payload) {
    return {
        type: 'WEIGTH_DOGS',
        payload
    }
}

export function filterTemperament() {
    return async function (dispatch) {
            var response = await axios.get(`http://localhost:3001/temperament}`)
            var listResponse = response.data.map(temp => temp.name)
            return dispatch({
                type: 'DOGS_TEMPERAMENTS',
                payload: listResponse
            })
    }
}