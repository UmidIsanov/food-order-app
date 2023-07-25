import styles from './MealItem.module.css'
import MealItmeForm from './MealItmeForm'
const MealItem = (props) =>{

    const formattedPrice = `$${props.price.toFixed(2)}`
return (
    <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className ={styles.price}>{formattedPrice}</div>
        </div>
        <div><MealItmeForm id ={props.id}/></div>

    </li>
)
}
export default MealItem