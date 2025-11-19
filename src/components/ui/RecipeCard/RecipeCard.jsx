import styles from './RecipeCard.module.css'
import personIcon from '../../../assets/icons/person.svg'
function RecipeCard({title, description,image,cookTime, serving}) {
    const renderPersonIcons = (count) => {
        const icons = [];
        for (let i = 0; i < count; i++) {
            icons.push(
                <img
                key={i}
                src={personIcon}
                alt='person'
                className={styles.personIcon}/>
            );
        }
        return icons;
    }
    return (
        <div className={styles.card} >
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.sc}>
                    <div className={styles.serving}>
                        <p className={styles.servingLabel}>Serving</p>
                        <p className={styles.servingValue}>{renderPersonIcons(serving)}</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.cooktime}>
                        <p className={styles.cooktimeLabel}>Cook Time</p>
                        <p className={styles.cooktimeValue}>{cookTime}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default RecipeCard;