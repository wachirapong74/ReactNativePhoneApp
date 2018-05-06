const initialState = {
    // users: { data: null, isLoading: true, isRejected: false },
    // user: { data: null, isLoading: true, isRejected: false },
    // userDelete: { success: false, isLoading: true, isRejected: false },
    signUp: { data: null, isLoading: true, isRejected: false },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER_SUCCESS':
            return { ...state, signUp: { data: null, isLoading: false, isRejected: false } }
        case 'SIGNUP_USER_REJECTED':
            return { ...state, signUp: { data: action.payload, isLoading: false, isRejected: true } }
        default:
            return state
    }
}