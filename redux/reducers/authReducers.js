export default (state = {}, action) => {
    switch (action.type) {
        case 'AUTH_USER':
            return { ...state, authenticated: true, data: action.payload }
        case 'UNAUTH_USER':
            //กรณีที่มีการ Signout ประเด็นส�ำคัญคือก�ำหนดตัวแปร authenticated เป็น false
            return { ...state, authenticated: false, data: null, error: null }
        case 'AUTH_ERROR':
            //Signin ไม่ส�ำเร็จ username หรือ password อาจไม่ถูกต้อง
            return { ...state, error: action.payload }
        case 'FETCH_MESSAGE':
            return { ...state, message: action.payload }
        default:
            return state
    }
}