import { createContext, useContext,  } from "react"

const Context = createContext()

const ContextProvider = ({children})=>{
    const changeNumber = (state, action)=> {
       switch(action.type){
        case 'inc': return state + 1;
        case 'dec': if(state > 0) return state - 1;
        default: return state;
       }
    }
    return (
        <Context.Provider value={changeNumber}>{children}</Context.Provider>
    )
}

const useContextStore = ()=> useContext(Context)

export {ContextProvider, useContextStore}