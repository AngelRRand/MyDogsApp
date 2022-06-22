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
        console.log(response)
        return dispatch({
            type: 'DETAIL_DOG',
            payload: response.data
        })
    }
}
export function deleteDetails() {
    return async function (dispatch) {
        return dispatch({
            type: 'DELETE_DETAILS'
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
        var response = await axios.get(`http://localhost:3001/temperaments`)
        var listResponse = response.data.map(temp => temp.name)
        //console.log(listResponse)
        return dispatch({
            type: 'LIST_TEMPERAMENTS',
            payload: listResponse
        })
    }
}

export function filterDogsTemp(payload) {
    return async function (dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/temperaments/filter?temperament=${payload}`);
            return dispatch({
                type: 'DOGS_BY_TEMP',
                payload: response.data
            })
        } catch (error) {
            console.log(error, "error en el filtro actions temperamnet")
        }
    }
}
export function paginationReset(payload) {
    console.log('activastePaginationAccion')
    return {
        type: 'PAGINATION_RESET',
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: 'CREATED',
        payload
    }
}

export function postDog(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/dogs', payload);
        return response;
    }
}