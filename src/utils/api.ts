import axios from "axios";
import Filter from "../constants/types/filter";
import DataAssets from "../constants/types/dataAssets";
import FilterHistory from "../constants/types/filterHistory";
import DataAssetsHistory from "../constants/types/dataAssetsHistory";

export default class CoinsAPI{
    public static async GetCoins(filter: Filter):Promise<DataAssets>{
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
    public static async GetMostPopularCoins():Promise<DataAssets>{
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
    public static async GetCoinHistoryById(id: string, filterHistory: FilterHistory):Promise<DataAssetsHistory[]>{
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