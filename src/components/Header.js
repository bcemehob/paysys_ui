import styles from './Header.module.css'
import { useSelector } from 'react-redux'

export default function Header() {
    const account = useSelector((state) => state.paymentSystem.account)
    return (
        <div className={styles.main}>
            <span className={styles.title}>Payment System </span>

            {account &&
            <span>Account: {account.name} (ID: {account.id} )</span>
            }
        </div>
    )

  }