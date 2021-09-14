import useSWR from 'swr';
import styles from './Main.module.css'
import List from './List';
import Wallet from './Wallet';
import Header from './Header';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Main() {
    const { data, error } = useSWR('/api/v1/wallet/list', fetcher)
    console.log(data)
    let paysysData = {wallets: data, wallet: null};

    
    return (
        <div className={styles.main}>
            <div className={styles.headerWrap}>
                <Header paysysData={paysysData}/>
            </div>
            <div className={styles.container}>
                { paysysData.wallets &&
                <List paysysData={paysysData}/>
                }
                <Wallet paysysData={paysysData} />
            </div>
        </div>
    )

  }