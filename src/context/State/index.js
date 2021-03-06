import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
const initialState = {
    user: null,
}
export const StateProvider = ({reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)