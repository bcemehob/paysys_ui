import {createSlice} from '@reduxjs/toolkit'

export const paymentSystemSlice = createSlice({
    name: 'paymentSystem',
    initialState: {
        wallets: null,
        wallet: null,
        accountId: null
    },
    reducers: {
        setWallet: (state, action) => {
            state.wallet = action.payload;
        },
        setAccountAndWallets: (state, action) => {
            state.account = action.payload.account;
            state.wallets = action.payload.wallets;
        },
        setWallets: (state, action) => {
            state.wallets = action.payload.wallets;
        },
    },
})

// Action creators are generated for each case reducer function
export const {setWallet, setAccountAndWallets, setWallets} = paymentSystemSlice.actions

export default paymentSystemSlice.reducer
