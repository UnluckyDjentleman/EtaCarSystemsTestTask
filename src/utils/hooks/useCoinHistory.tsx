import { useEffect, useState } from "react";
import FilterHistory from "../../constants/types/filterHistory";
import DataAssetsHistory from "../../constants/types/dataAssetsHistory";
import { AxiosError } from "axios";
import CoinsAPI from "../api";

export default function useCoinHistory(id: string, filterHistory: FilterHistory){
    const [history, setHistory]=useState<DataAssetsHistory[]>();
    const [load, setLoad]=useState<string|boolean>();
    const [error, setError]=useState<AxiosError>();

    useEffect(()=>{
        setLoad("Loading...");
        CoinsAPI.GetCoinHistoryById(id,filterHistory).then(data=>{           
            setHistory((data.data as DataAssetsHistory[]).map((el:DataAssetsHistory)=>(
                {...el, 
                    time: new Date(el.time).getHours().toString()+":"+(new Date(el.time).getMinutes()===0?"00":new Date(el.time).getMinutes())
                })
            ))
            setLoad(true)
        }).catch(err=>{
            setError(err);
            setLoad(false);
        })
    },[filterHistory,id])

    return {load, history, error};
}