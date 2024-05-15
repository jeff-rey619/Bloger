import React from 'react';
import styles from "./featured.module.css"
import Image from 'next/image';

function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b >
                    Hey jeff here !..
                </b>
                Discover my stories and creative ideas
                
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
<Image src="/p1.jpeg" alt=""  fill/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis natus 
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt, ratione commodi animi repellendus quidem quas sit unde ab quasi! Nisi ab doloribus repellendus facere aut voluptatum veritatis rem ipsa?
                    </p>
                    <button className={styles.button} >
                        Read more
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Featured;