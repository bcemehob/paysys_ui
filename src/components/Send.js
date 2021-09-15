import styles from './Send.module.css'
import { useState } from "react";
import { useSelector } from 'react-redux'
import Api from "../api/Api";


export default function Send(props) {
    const current = useSelector((state) => state.paymentSystem.wallet)
    const wallets = useSelector((state) => state.paymentSystem.wallets)
    const [value, setValue] = useState({amount: 0, receiver: null})
    const handleChange = e => setValue({amount:e.target.value, receiver: value.receiver})
    const handleSelect = e => setValue({amount:value.amount, receiver: e.target.value})
    return (
        <div className={styles.main}>
            { current &&
            <div>
                <span className={styles.label}>wallet to send money:  </span>
                <select onChange={handleSelect}>
                    {wallets.map((w, i) => (
                        <option key={i} value={ w.id}>{w.id}</option>
                    ))}
                </select>
                <div>SELECTED: {value.receiver}</div>
                <span className={styles.label}>send amount: </span>
                <input type='number' value={value.amount}  onChange={handleChange} />
                <button onClick={ () => Api.send(current.id, value.receiver, value.amount)}>TOP UP</button>
            </div>
            }
        </div>
    )

}