import styles from './Wallet.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setCurrent } from '../store/walletSlice'


export default function Wallet(props) {
    const current = useSelector((state) => state.wallet.current)
    console.log("WALLET PROPS:", props)
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <h2>Selected wallet</h2>
                {current &&
                <div> id: {current.id}</div>
                }
            </div>
        </div>
    )

  }