import { useEffect, useState } from "react";
import Assets from "../../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../api";

export default function useCoin(id: string){
    const [coin, setCoin]=useState<Assets>();
    const [load, setLoad]=useState<boolean|string>();
    const [error, setError]=useState<AxiosError>();

    useEffect(()=>{
        setLoad("Loading...")
        CoinsAPI.GetCoinById(id).then(data=>{
            setCoin(data.data as Assets)
            setLoad(true)
        }).catch(error=>{
            setError(error);
            setLoad(false);
        })
    },[id])

    return {error, coin, load}
}