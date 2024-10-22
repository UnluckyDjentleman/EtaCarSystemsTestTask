import useCoin from "../utils/hooks/useCoin";
import { useAppSelector } from "../utils/hooks/useRedux";
import useCoinHistory from "../utils/hooks/useCoinHistory";
import Loader from "../components/loader/loader";
import { LineChart, YAxis, XAxis, Line, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import SelectHistory from "../components/history/selectHistory";
import Assets from "../constants/types/assets";
import CoinDescription from "../components/info/coinInfo";
import { useLocation } from "react-router";

export default function CoinInfo(){
    const filterHistory=useAppSelector(state=>state.filterHistory)
    const { state: coin } = useLocation();

    console.log(coin.id);
    const result=useCoin(coin.id);
    console.log(result);
    const coinHistory=useCoinHistory(coin.id,filterHistory)

    return(
        <>
        {
            (result.load==="Loading...")&&(
                <Loader></Loader>
            )
        }
        {
            (result.load===true)&&(
                <div className="container mx-auto">
                    <div className='py-4 px-1 w-full md:w-[470px]'>
                            <CoinDescription item={result.coin as Assets}/>
                    </div>
                    <div className='py-4 px-1 w-full md:w-[470px]'>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={coinHistory.history}>
                                    <Line type='monotone' dataKey='priceUsd' stroke='#3B82F6' />
                                    <CartesianGrid stroke='#ccc' />
                                    <XAxis className='text-xs sm:text-lg lg:text-xl' dataKey='time'/>
                                    <YAxis className='text-xs sm:text-lg lg:text-xl' />
                                    <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                        <SelectHistory histories={filterHistory}></SelectHistory>
                    </div>
                </div>
            )
        }
        {
            (result.error||coinHistory.error)&&(
                <p>{
                    result.error?.message
                }</p>
            )
        }
        </>
    )
}