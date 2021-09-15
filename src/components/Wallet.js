import styles from './Wallet.module.css'
import { useSelector } from 'react-redux'
import TopUp from "./TopUp";
import Withdraw from "./Withdraw";
import Send from "./Send";
import Api from "../api/Api";

export default function Wallet(props) {
    const current = useSelector(state => state.paymentSystem.wallet)

    let url = current ? Api.urls.balance + current.id : "-";
    const balance = Api.getData(url) ;
    let mut = () => balance.mutate();
    return (
        <div className={styles.main}>
            <div className={styles.wrap}>
                <h2>Selected wallet</h2>
                {current &&
                <div>
                    <div><span className={styles.label}>id</span>: {current.id}</div>
                    <div className={styles.balance}> <span className={styles.label}>balance</span>: {balance.data}</div>
                </div>
                }
            </div>
            <TopUp callback={mut}/>
            <Withdraw callback={mut} />
            <Send callback={mut}/>
        </div>
    )

  }