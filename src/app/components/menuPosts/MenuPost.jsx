import React from 'react';
import styles from "./menuPosts.module.css"
import Link from 'next/link';
import Image from 'next/image';

function MenuPost({withImage}) {
    return (
        
            <div className={styles.items}>
            <Link href={"/"} className={styles.item}>
                {
                    withImage&&<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                }
                    

                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                        <h3 className={styles.posttitle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Hohn hoe
                            </span>
                            <span className={styles.date}>
                               -  10.03.2020
                            </span>
                        </div>
                    </div>
                </Link>

                 <Link href={"/"} className={styles.item}>
                      {
                    withImage&&<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                }

                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>culture</span>
                        <h3 className={styles.posttitle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Hohn hoe
                            </span>
                            <span className={styles.date}>
                               -  10.03.2020
                            </span>
                        </div>
                    </div>
                </Link>


                 <Link href={"/"} className={styles.item}>
                      {
                    withImage&&<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                }

                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>food</span>
                        <h3 className={styles.posttitle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Hohn hoe
                            </span>
                            <span className={styles.date}>
                               -  10.03.2020
                            </span>
                        </div>
                    </div>
                </Link>

                 <Link href={"/"} className={styles.item}>
                      {
                    withImage&&<div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                }

                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
                        <h3 className={styles.posttitle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Hohn hoe
                            </span>
                            <span className={styles.date}>
                               -  10.03.2020
                            </span>
                        </div>
                    </div>
                </Link>

             
            </div>
    );
}

export default MenuPost;