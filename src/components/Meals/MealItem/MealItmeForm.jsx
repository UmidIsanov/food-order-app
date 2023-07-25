import Input from "../../UI/Input"
import styles from "./MealItemForm.module.css"
const MealItmeForm = (props) => {
  return <form className={styles.form}>
    <Input label ='Количество' input ={{
        id: props.id,
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>Добавить</button>
  </form>
}

export default MealItmeForm