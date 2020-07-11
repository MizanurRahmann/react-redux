const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } = require("./userType")

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_REQUEST:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
    }
}