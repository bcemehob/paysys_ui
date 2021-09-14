import styles from './List.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setCurrent } from '../store/walletSlice'

const stateHolder = {};


export default function List(props) {
    const count = useSelector((state) => state.wallet.value)
    const current = useSelector((state) => state.wallet.current)
    const dispatch = useDispatch()
  
    console.log(props);
    stateHolder.selectWallet = w => {
        props.paysysData.wallet = w;
        console.log(w);
    }

    return (
    <div className={styles.main}>
        <div>count: {count}</div>  
        {current &&
        <div>current: {current.id}</div>   
        }
        <h2>List of Wallets: </h2>
        {props.paysysData.wallets && 
            <ul>
            {props.paysysData.wallets.map((fetched, i) => (
            <li key={i} onClick={ () => dispatch(setCurrent(fetched))}>{fetched.id}</li>
            ))}
            </ul>
        }
        </div>);

}
  