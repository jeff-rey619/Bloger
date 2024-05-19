import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from "./Menu.module.css"
import MenuPost from '../menuPosts/MenuPost';

function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>"What's hot"</h2>
            <h1 className={styles.title}>Most Popular</h1>
         
           
 <MenuPost withImage={false} />


            <h2 className={styles.subtitle}>{ "Discover by topic"}</h2>
            <h1 className={styles.title}>Categories</h1>




               <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editor's pick</h1>

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

            <MenuPost withImage={true } />











         
        </div>
    );
}

export default Menu;