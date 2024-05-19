import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from "./cardlist.module.css";
import Image from 'next/image';
import Card from '../card/Card';


function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
Recent post 
            </h1>
            <div className={styles.posts}>
                <Card />    
                <Card />
                <Card />
                <Card />
                <Card/>
            </div>
            <Pagination /> 
        </div>
    );
}

export default CardList;