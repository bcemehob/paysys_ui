import styles from './AddWallet.module.css'
import { useSelector } from 'react-redux'
import Api from "../api/Api";

export default function AddWallet(props) {
    const account = useSelector((state) => state.paymentSystem.account)
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <button onClick={ () => Api.createWallet(account.id, props.callback)}>create new wallet</button>
            </div>
        </div>
    )
}
