import styles from './Withdraw.module.css'
import { useState } from "react";
import { useSelector } from 'react-redux'
import Api from "../api/Api";


export default function Withdraw(props) {
    const current = useSelector((state) => state.paymentSystem.wallet)
    const [value, setValue] = useState({amount: 0, error: null})
    const handleChange = e => setValue({amount:e.target.value, error: null})
    const withdraw = async () => {
        let resp = await Api.withdraw(current.id, value.amount, props.callback);
        if (resp.code && resp.code === 'AMOUNT_IS_LESS_THAN_ZERO') {
            setValue({amount: 0, error: resp.code});
        }
    }
    const resetError = () => setValue({amount: 0, error: null})
    return (
        <div className={styles.main}>
            { current &&
            <div>

                { value.error &&
                    <div className={styles.error} onClick={resetError}>ERROR! {value.error}</div>
                }
                <span className={styles.label}>withdraw amount: </span>
                <input type='number' value={value.amount}  onChange={handleChange} />
                <button onClick={withdraw}>WITHDRAW</button>
            </div>
            }
        </div>
    )

}