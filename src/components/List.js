import styles from './List.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import { setWallet } from '../store/paymentSystemSlice'
import AddWallet from "./AddWallet";


export default function List(props) {
    const dispatch = useDispatch();
    const [value, setValue] = useState({selectedId: null})
    const select = selectedWallet => {
        dispatch(setWallet(selectedWallet));
        setValue({selectedId: selectedWallet.id});
    }
  
    return (
    <div className={styles.main}>
        <h2>List of Wallets: </h2>
        {props.paysysData.wallets && 
            <ul>
            {props.paysysData.wallets.map((w, i) => (
            <li className={styles.el} key={i} onClick={ () => select(w)}>{w.id}
                {w.id === value.selectedId &&
                <span>***</span>
                }

            </li>
            ))}
            </ul>
        }
        <AddWallet callback = {props.callback}/>
    </div>);

}
  