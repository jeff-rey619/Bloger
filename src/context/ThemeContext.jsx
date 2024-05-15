"use client"

import React, { useEffect, useState } from 'react';
import { createContext } from 'react';




export const ThemeContext = createContext()

function getFromLocalStorage() {

    if (typeof window !== "undefined") {
    let value = localStorage.getItem("theme")
    return value || "light"
    }   
    
}   
export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    });

    function toggle() {
        setTheme(theme === "light"?"dark":"light")
    }

    useEffect(() => {
        localStorage.setItem("theme" , theme)
    },[theme]) 

    return (
        <ThemeContext.Provider value={{theme , toggle}}>
            {children}
      </ThemeContext.Provider>
    );
}

