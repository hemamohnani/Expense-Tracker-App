import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions:[]
}


//create context

export const GlobalContext = createContext(initialState);

//Now for every other files to have access to our global data/states, we need to wrap it in a provider

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions:

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }


    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}