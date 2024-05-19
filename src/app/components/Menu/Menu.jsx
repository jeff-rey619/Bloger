import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from "./Menu.module.css"
import MenuPost from '../menuPosts/MenuPost';
import MenuCategories from '../MenuCategories/MenuCategories'

function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>"What's hot"</h2>
            <h1 className={styles.title}>Most Popular</h1>
         
           
 <MenuPost withImage={false} />


            <h2 className={styles.subtitle}>{ "Discover by topic"}</h2>
            <h1 className={styles.title}>Categories</h1>

<MenuCategories/>


               <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editor's pick</h1>

          

            <MenuPost withImage={true } />











         
        </div>
    );
}

export default Menu;