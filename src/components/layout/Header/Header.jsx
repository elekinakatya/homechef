import styles from './Header.module.css';
function Header() {
    return (
        <div className = {styles.header}>
            <div className = {styles.logo}>Homechef</div>
            <nav className={styles.nav}>
                <a href="/shop" className={styles.shop}>Shop</a>
                <a href="/features" className={styles.features}>Features</a>
                <a href="/recipes" className={styles.recipes}>Recipes</a>
                <a href="/hotline" className={styles.hotline}>Hotline</a>
            </nav>
            <div className={styles.actions}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign Up</button>
            </div>

        </div>
    );
}
export default Header;