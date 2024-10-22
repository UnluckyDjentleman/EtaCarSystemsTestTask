import useCoin from "../utils/hooks/useCoin";
import { useAppSelector } from "../utils/hooks/useRedux";
import useCoinHistory from "../utils/hooks/useCoinHistory";
import Loader from "../components/loader/loader";
import { LineChart, YAxis, XAxis, Line, CartesianGrid, Tooltip } from "recharts";
import SelectHistory from "../components/history/selectHistory";
import Assets from "../constants/types/assets";
import CoinDescription from "../components/info/coinInfo";

export default function CoinInfo(){
    const filterHistory=useAppSelector(state=>state.filterHistory)
    const hrefs=window.location.pathname.split("/");
    const id=hrefs[hrefs.length-1];

    const result=useCoin(id);
    const coinHistory=useCoinHistory(id,filterHistory)

    return(
        <>
        {
            (result.load==="Loading...")&&(
                <Loader></Loader>
            )
        }
        {
            (result.load===true)&&(
                <div className="container mx-auto px-2 md:px-0">
                    <div className='py-4 px-1 md:px-3 w-full md:w-[470px] rounded-b-xl shadow-xl'>
                        <div className="flex flex-col items-start gap-2 sm:gap-4">
                            <CoinDescription item={result.coin as Assets}/>
                            <LineChart width={500} height={300} className='mx-auto' data={coinHistory.history}>
                                <Line type='monotone' dataKey='priceUsd' stroke='#8884d8' />
                                <CartesianGrid stroke='#ccc' />
                                <XAxis className='text-xs sm:text-lg lg:text-xl' dataKey='time'/>
                                <YAxis className='text-xs sm:text-lg lg:text-xl' />
                                <Tooltip />
                            </LineChart>
                            <SelectHistory histories={filterHistory}></SelectHistory>
                        </div>
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