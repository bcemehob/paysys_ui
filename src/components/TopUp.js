import styles from './TopUp.module.css'
import { useState } from "react";
import { useSelector } from 'react-redux'
import Api from "../api/Api";


export default function TopUp(props) {
    const current = useSelector((state) => state.paymentSystem.wallet)
    const [value, setValue] = useState({amount: 0})
    const handleChange = e => setValue({amount:e.target.value})
    return (
        <div className={styles.main}>
            { current &&
            <div>
                <span className={styles.label}>top up amount: </span>
                <input type='number' value={value.amount}  onChange={handleChange} />
                <button onClick={ () => Api.topUp(current.id, value.amount, props.callback)}>TOP UP</button>
            </div>
            }
        </div>
    )

}