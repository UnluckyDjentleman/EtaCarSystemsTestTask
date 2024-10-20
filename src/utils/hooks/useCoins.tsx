import { useEffect, useState } from "react";
import Assets from "../../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../api";
import Filter from "../../constants/types/filter";

export default function useCoins(filter: Filter){
    const [coins, setCoins]=useState<Assets[]>();
    const [load, setLoad]=useState<boolean|string>();
    const [error, setError]=useState<AxiosError>();

    useEffect(()=>{
        setLoad("Loading...")
        CoinsAPI.GetCoins(filter).then(data=>{
            switch(filter.order_by){
                case '':  setCoins(data.data as Assets[]); break;
                case 'pricedesc': setCoins((data.data as Assets[]).sort((a: Assets,b:Assets)=>parseFloat(a.priceUsd)-parseFloat(b.priceUsd))); break;
                case 'priceasc': setCoins((data.data as Assets[]).sort((a,b)=>parseFloat(b.priceUsd)-parseFloat(a.priceUsd))); break;
                case 'changedesc': setCoins((data.data as Assets[]).sort((a,b)=>parseFloat(a.changePercent24Hr)-parseFloat(b.changePercent24Hr))); break;
                case 'changeasc': setCoins((data.data as Assets[]).sort((a,b)=>parseFloat(b.changePercent24Hr)-parseFloat(a.changePercent24Hr))); break;
                case 'marketcapdesc': setCoins((data.data as Assets[]).sort((a,b)=>parseFloat(a.marketCapUsd)-parseFloat(b.marketCapUsd))); break;
                case 'marketcapasc': setCoins((data.data as Assets[]).sort((a,b)=>parseFloat(b.marketCapUsd)-parseFloat(a.marketCapUsd))); break;
            }
            setLoad(true)
        }).catch(error=>{
            setError(error);
            setLoad(false);
        })
    },[filter.offset, filter.search, filter.order_by])

    return {error, coins, load}
}