import actionTypes from './types';

export function setUser(payload) {
    return {
        type: actionTypes.SET_USER,
        payload,
    }
}