import actionTypes from './types';


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            const {user: {displayName, email, photoURL}} = action.payload
            return {
                ...state,
                user: {
                    email,
                    name: displayName,
                    photoURL
                }
            }
        default:
            return state;
    }
}
export default reducer;