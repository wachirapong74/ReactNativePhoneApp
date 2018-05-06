const initialState = [
    { key: 'Devin from Redux' },
    { key: 'Jackson from Redux' },
    { key: 'James from Redux' },
]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SAVE":
            return [
                ...state,
                { key: action.payload }
            ]
        default:
            return state
    }
}