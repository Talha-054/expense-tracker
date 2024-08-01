import { createContext, useState } from "react";



export let DataContext = createContext();



export default function DataContextProvider ({children}){

    const [data, SetData] = useState([''])


    return (
        <DataContext.Provider value={[data, SetData]}>
            {children}
        </DataContext.Provider> 
    )
};