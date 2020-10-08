import {
    READ_HELLO_LOADING, READ_HELLO_SUCCESS, READ_HELLO_ERROR
} from "../actions";

const init_State = {
    hello: "",
    loading: false,
    error: false,
}

export default (state=init_State, action) => {
    switch (action.type) {

        //LOADING
        case READ_HELLO_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case READ_HELLO_SUCCESS:
            return {
                ...state,
                loading: false,
                hello: action.payload
            }

        //ERROR
        case READ_HELLO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default: return state;
    }

}