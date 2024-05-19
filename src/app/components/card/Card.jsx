import React from 'react';
import styles from './card.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Card(props) {
    return (
        <div className={styles.container}>
                  
                    <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={ styles.image} /> 
                    </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.8.2024</span>
                     <span className={styles.category}>Culture</span>
                </div>
               <Link href='/'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
            </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis, soluta ratione et tempore odit ex rem quibusdam earum a maxime ad adipisci officiis maiores ut totam culpa, distinctio iusto!
                </p>
                <Link href='/' className={styles.link}>
                Read more
                </Link>
                     </div>
                 
        </div>
    );
}

export default Card;