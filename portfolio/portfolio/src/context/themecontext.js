import { createContext, useContext } from "react";

const themecontext=createContext({
    theme:"light",
    lighttheme:()=>{},
    darktheme:()=>{}
})


export const Themecontextprovider=themecontext.Provider

export function usetheme(){
    return useContext(themecontext)

}