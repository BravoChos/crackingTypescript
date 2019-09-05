import React from 'react'
import {IState,IAction} from './interfaces'

export const Store = React.createContext<IState | any>(initalState)

function reducer(state:IState, action:IAction):IState{
    switch(action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload}
        case 'ADD_FAV':
            return {...state, favorites: [...state.favorites, action.payload]}
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element{
    const [state, dispatch] = React.useReducer(reducer,initalState)
    return <Store.Provider value={{state, dispatch}}>
        {props.children}
    </Store.Provider>
}
