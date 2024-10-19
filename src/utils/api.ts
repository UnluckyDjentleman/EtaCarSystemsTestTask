import axios from "axios";
import Assets from "../constants/types/assets";
import Filter from "../constants/types/filter";

export default class CoinsAPI{
    public static async GetCoins(filter: Filter):Promise<Assets[]>{
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
    public static async GetMostPopularCoins():Promise<Assets[]>{
        const resp=await axios.get(import.meta.env.VITE_API_COINS_URL+'/assets',{
            params:{
                limit: 3
            }
        });
        return resp.data;
    }
}