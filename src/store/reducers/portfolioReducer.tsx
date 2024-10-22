import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Portfolio from '../../constants/types/portfolio'
import { LOCALSTORAGE_KEY_PORTFOLIO } from '../../constants/portfolio'
import AddPortfolio from '../../constants/types/addPortfolio';
import Assets from '../../constants/types/assets';

function stateInitialize():Portfolio{
    const localStore:string|null=localStorage.getItem(LOCALSTORAGE_KEY_PORTFOLIO);
    if(localStore){
        const coins: AddPortfolio[]=JSON.parse(localStore)
        return{
            coins: coins,
            summary: coins.reduce<number>((acc, coin)=>acc+parseFloat(coin.asset.priceUsd),0)
        }
    }
    return {
        coins: [],
        summary: 0
    }
}

export const portfolioReducer=createSlice({
    name: 'portfolio',
    initialState: stateInitialize,
    reducers:{
        addCoin: (state, action: PayloadAction<AddPortfolio>)=>{
            const existingCoin=state.coins.find(el=>el.asset.id===action.payload.asset.id);
            if(existingCoin){
                existingCoin.count+=action.payload.count
            }
            else{
                state.coins.push({...action.payload});
            }
            state.summary+=(+action.payload.asset.priceUsd)*action.payload.count;
            localStorage.setItem(LOCALSTORAGE_KEY_PORTFOLIO, JSON.stringify(state.coins))
        },
        removeCoin: (state, action: PayloadAction<Assets>)=>{
            const coin=state.coins.find(el=>el.asset.id===action.payload.id);
            if(coin){
                state.coins=state.coins.filter(el=>el.asset.id!==coin.asset.id)
                state.summary-=(+coin.asset.priceUsd*coin.count)
                localStorage.setItem(LOCALSTORAGE_KEY_PORTFOLIO, JSON.stringify(state.coins))
            }
        }
    }
})

export const {addCoin, removeCoin} = portfolioReducer.actions

export default portfolioReducer.reducer;