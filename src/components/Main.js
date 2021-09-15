import styles from './Main.module.css'
import List from './List';
import Wallet from './Wallet';
import Header from './Header';
import Api from '../api/Api'
import { useDispatch } from 'react-redux'
import {setAccountAndWallets} from "../store/paymentSystemSlice";


export default function Main() {
    const acc = Api.getData(Api.urls.getAccount);
    const wallets = Api.getData(Api.urls.walletsList);
    let paysysData = {wallets: wallets.data, wallet: null, account: acc.data};
    let mut = () => wallets.mutate();
    let mut2 = w => paysysData.wallet = w;
    const dispatch = useDispatch();
    dispatch(setAccountAndWallets(paysysData));
    return (
        <div className={styles.main}>
            <div className={styles.headerWrap}>
                <Header paysysData={paysysData}/>
            </div>
            {paysysData.wallets &&
            <div className={styles.container}>

                <List paysysData={paysysData} callback={mut} callbackSelect={mut2}/>

                <Wallet paysysData={paysysData} callback={mut}/>
            </div>
            }
        </div>
    )

  }