import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./categorylist.module.css"

function CategoryList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Popular Categories
            </h1>
            <div className={styles.categories}>
                <div className={styles.category}>
                    
                    <Link href="/blog?cat=style">
                        <Image src="/style.png" alt='' width={32} height={32} className={styles.image} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;