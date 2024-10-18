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
            console.log(data)
            setCoins(data.data)
            setLoad(true)
        }).catch(error=>{
            setError(error);
            setLoad(false);
        })
    },[filter.limit, filter.offset, filter.search, filter.ids])

    return {error, coins, load}
}