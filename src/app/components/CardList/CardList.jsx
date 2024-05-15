import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from "./cardlist.module.css";
import Image from 'next/image';


function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
Recent post
            </h1>
            <div className={styles.posts}>
                <div className={styles.post}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" width={32} height={32} /> 
                    </div>
                     <div className={styles.textContainer}></div>
                 </div>
            </div>
            <Pagination /> 
        </div>
    );
}

export default CardList;