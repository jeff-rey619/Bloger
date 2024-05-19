import React from 'react';
import styles from './menuCategories.module.css'
import Image from 'next/image';
import Link from 'next/link';


function MenuCategories(props) {
    return (
         <div className={styles.categoryList}>
                <Link href="/blog?cat=style" className={`${styles.categoryItems} ${styles.style}`} >
                Style    
                </Link>
                <Link href="/blog?cat=style" className={`${styles.categoryItems} ${styles.food}`} >
                food    
                </Link>
                <Link href="/blog?cat=style" className={`${styles.categoryItems} ${styles.culture}`} >
                culture    
                </Link>
                <Link href="/blog?cat=style" className={`${styles.categoryItems} ${styles.travel}`} >
                travel    
                </Link>
                <Link href="/blog?cat=style" className={`${styles.categoryItems} ${styles.coding}`} >
                coding    
                </Link>

            </div>
    );
}

export default MenuCategories;