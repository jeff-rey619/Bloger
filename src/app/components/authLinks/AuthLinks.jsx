"use client"


import Link from 'next/link';
import  { useEffect, useState } from 'react';
import styles from './authLinks.module.css'
function AuthLinks() {

    const [Open , setOpen] = useState(false)

    const status = "notauth"
    return (
        <>
            {
                status === "notauth" ? (
                    <Link className={styles.link} href="/login">
                        Login
                    </Link>
                ) : (<>
                        <Link className={styles.link} href="/Write">
                            Write
                        </Link>
                        <span className={styles.link}>
                                Log out
                        </span>
                        </>
                        
                )
            }
            
            <div  className={styles.burger} onClick={()=>setOpen(!Open)}>
                <div className={styles.line}></div>
                <div  className={styles.line}></div>
                 <div  className={styles.line}></div>
            </div>

            {
                Open && (
                    <div className={styles.responsiveMenu}>
                        <Link href="/">
                            Home Page
                        </Link>
                         <Link href="/">
                            About 
                        </Link>
                         <Link href="/">
                            Contact 
                        </Link>
                         {
                status === "noauth" ? (
                    <Link href="/login">
                        Login
                    </Link>
                ) : (<>
                        <Link href="/Write">
                            Write
                        </Link>
                        <span className={styles.link}>
                                Log out
                        </span>
                        </>
                        
                )
            }
                    </div>
                )
            }
        </>
    );
}

export default AuthLinks;