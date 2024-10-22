import axios from "axios";
import Filter from "../constants/types/filter";
import DataAssets from "../constants/types/dataAssets";
import FilterHistory from "../constants/types/filterHistory";
import DataAssetsArray from "../constants/types/dataAssetsArray";
import DataAssetsHistoryArray from "../constants/types/dataAssetsHistoryArray";

export default class CoinsAPI{
    public static async GetCoins(filter: Filter):Promise<DataAssetsArray>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets',{
            params:{
                limit: filter.limit,
                offset: filter.offset,
                search: filter.search,
                ids: filter.ids
            }
        });
        return resp.data;
    }
    public static async GetMostPopularCoins():Promise<DataAssetsArray>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets',{
            params:{
                limit: 3
            }
        });
        return resp.data;
    }
    public static async GetCoinById(id: string):Promise<DataAssets>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets/'+id);
        return resp.data;
    }
    public static async GetCoinsByIds(ids: string[]):Promise<DataAssetsArray>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets',{
            params:{
                ids: ids.join(",")
            }
        });
        return resp.data;
    }
    public static async GetCoinHistoryById(id: string, filterHistory: FilterHistory):Promise<DataAssetsHistoryArray>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets/'+id+"/history",{
            params:{
                interval: filterHistory.interval,
                start: filterHistory.start,
                end: filterHistory.end
            }
        })
        return resp.data;
    }
}