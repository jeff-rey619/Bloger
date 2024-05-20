import React from 'react';
import Menu from '../components/Menu/Menu';
import styles from './singlePage.module.css'
import Image from 'next/image';
const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit, amet consectetur 
                    </h1>
                    
                    <div className={styles.user}>
    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>
                                John hoe
                            </span>
                              <span className={styles.date}>
                                69.619.420
                            </span>
                        </div>
                    </div>
                
                </div>
                <div className={styles.imageContainer}>
<Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
         
                    </div>
                     
                    
                </div>
                
            </div>
             <Menu />
        </div>
    );
};

export default SinglePage;