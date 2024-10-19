import { useEffect, useState } from "react";
import Assets from "../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../utils/api";
import Filter from "../constants/types/filter";

export default function useCoins(filter: Filter){
    const [coins, setCoins]=useState<Assets[]>();
    const [load, setLoad]=useState<boolean|string>();
    const [error, setError]=useState<AxiosError>();

    useEffect(()=>{
        setLoad("Loading...")
        CoinsAPI.GetCoins(filter).then(data=>{
            switch(filter.order_by){
                case '':  setCoins(data.data); break;
                case 'pricedesc': setCoins(data.data.sort((a,b)=>a.priceUsd-b.priceUsd)); break;
                case 'priceasc': setCoins(data.data.sort((a,b)=>b.priceUsd-a.priceUsd)); break;
                case 'changedesc': setCoins(data.data.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)); break;
                case 'changeasc': setCoins(data.data.sort((a,b)=>b.changePercent24Hr-a.changePercent24Hr)); break;
                case 'marketcapdesc': setCoins(data.data.sort((a,b)=>a.marketCapUsd-b.marketCapUsd)); break;
                case 'marketcapasc': setCoins(data.data.sort((a,b)=>b.marketCapUsd-a.marketCapUsd)); break;
            }
            setLoad(true)
        }).catch(error=>{
            setError(error);
            setLoad(false);
        })
    },[filter.offset, filter.search, filter.order_by])

    return {error, coins, load}
}