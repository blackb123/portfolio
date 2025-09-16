import { createContext, useContext, useState } from "react";

const Themecontext = createContext();

const Themeprovider=({children})=>{

    const [theme,settheme]= useState("contrast");

    return (
        <Themecontext.Provider value={{theme,settheme}}>
            {children}
        </Themecontext.Provider>
    );

}

export { Themecontext,Themeprovider };