import Link from "next/link";
import CardList from "./components/CardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/Menu/Menu";

import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.containers}>
        <CardList />
        <Menu />

      </div>
     
    </div>
  )
  

}


