"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import styles from './themeToggle.module.css'

function ThemeToggle() {

    const {theme , toggle}  = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle} style={theme ==="light"?{ backgroundColor:"#0f172a"}:{ backgroundColor:"white"}}>
            <img src="/moon.png" alt="" width={14} height={14} />
            <div className={styles.ball} style={theme ==="dark"?{left:1 , background:"#0f172a"}:{right:1 , background:"white"}}></div>
            <img src="/sun.png" alt="" width={14} height={14} />
   
            
        </div>
    );
}

export default ThemeToggle;