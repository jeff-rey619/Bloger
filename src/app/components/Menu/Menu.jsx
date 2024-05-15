import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from "./Menu.module.css"

function Menu() {
    return (
        <div className={styles.container}>
            <Pagination/>
        </div>
    );
}

export default Menu;