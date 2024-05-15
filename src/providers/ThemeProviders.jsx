"use client"
import React, { useContext, useEffect, useState } from 'react';
import {ThemeContext} from '../context/ThemeContext'

function ThemeProviders({children}) {
    const { theme } = useContext(ThemeContext)
    const [mounted , setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [mounted])
    
    if (mounted) {
         return (
        <div className={theme}>
            {   
                children
            }
        </div>  
    );
    }
   
}

export default ThemeProviders;