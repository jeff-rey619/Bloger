import React from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="facebook" width={24} height={24} />
                <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
                <Image src="/youtube.png" alt="facebook" width={24} height={24} />
            </div>

            <div className={styles.logo }>Jeff Blog</div>
            <div className={styles.link}>
                <ThemeToggle/>
                <Link href="/" className={styles.links}>
                    Home page
                </Link>
                 <Link href="/" className={styles.links}>
                    Contact
                </Link>
                 <Link href="/" className={styles.links}>
                    About
                </Link>
                <AuthLinks />
                
                
            </div>
         
            
        </div>
    );
}

export default Navbar;