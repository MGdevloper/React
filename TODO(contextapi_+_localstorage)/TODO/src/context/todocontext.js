import { createContext,useContext } from "react";


const Todocontext=createContext({

    Todos:[{
        todo:String,
        completed:Boolean,
        id:Date.now()
    
    }],

    addtodo:(todo)=>{},
    edittodo:(id,todo)=>{},
    removetodo:()=>{}
})

export const Todoprovider=Todocontext.Provider

export function useTodo(){
    return useContext(Todocontext)
}