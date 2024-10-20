import Assets from "../../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../api";
import { useEffect, useState } from "react";

export default function useMostPopularCoins(){
    const [popularCoins, setPopularCoins]=useState<Assets[]>();
    const [load, setLoad]=useState<boolean|string>();
    const [error, setError]=useState<AxiosError>();

    useEffect(()=>{
        setLoad("Loading...")
        CoinsAPI.GetMostPopularCoins().then(data=>{
            console.log(data)
            setPopularCoins(data.data as Assets[])
            setLoad(true)
        }).catch(error=>{
            setError(error);
            setLoad(false);
        })
    },[])

    return {error, popularCoins, load}
}