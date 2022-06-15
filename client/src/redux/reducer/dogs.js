const inicialState = {
    dogs: [],
    allDogs: [],
    detail: []
}

export default function dogs(state = inicialState, action) {
    switch (action.type) {


        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }

        case 'SEARCH_DOG':
            return {
                ...state,
                dogs: action.payload,
            }

        case 'DETAIL_DOG':
            return {
                ...state,
                detail: action.payload
            }
        case 'ALFABETIC_DOGS':

            const sortName = action.payload === 'asc' ? 
                [...state.dogs].sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA > b.name) {
                    return 1;
                }
                if (nameB > a.name) {
                    return -1;
                }
                return 0;
            }) : [...state.dogs].sort((a, b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA > b.name) {
                    return -1;
                }
                if (nameB > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                dogs: sortName
            }

        default:
            return state
    }
}