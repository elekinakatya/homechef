import { useState } from 'react'
import styles from './RecipesPage.module.css'
import Header from "../../components/layout/Header/Header.jsx";

function RecipesPage() {
    const [recipes, setRecipes] = useState([])
    return (
        <div className={styles.page}>
        <Header></Header>
        </div>
    )
}
export default RecipesPage;