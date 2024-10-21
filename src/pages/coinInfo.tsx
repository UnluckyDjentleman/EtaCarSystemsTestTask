import { useNavigate } from "react-router";
import useCoin from "../utils/hooks/useCoin";
import { useAppSelector } from "../utils/hooks/useRedux";
import useCoinHistory from "../utils/hooks/useCoinHistory";
import Loader from "../components/loader/loader";
import { LineChart, YAxis, XAxis, Line, CartesianGrid, Tooltip } from "recharts";
import SelectHistory from "../components/history/selectHistory";

export default function CoinInfo(){
    const filterHistory=useAppSelector(state=>state.filterHistory)
    const navigate=useNavigate();
    const hrefs=window.location.pathname.split("/");
    const id=hrefs[hrefs.length-1];

    const result=useCoin(id);
    const coinHistory=useCoinHistory(id,filterHistory)

    const clickBack=()=>{
        navigate("/")
    }

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
                    <div className='py-4 px-1 md:px-3 w-full md:w-[470px] md:h-[580px] lg:h-[700px] rounded-b-xl shadow-xl'>
                    <div className='flex flex-col items-start gap-2 sm:gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            <span className='font-bold text-lg'>{result.coin?.name}</span>
                            <span className='text-gray-500'>{result.coin?.symbol}</span>
                        </div>

                        <div className='flex flex-row gap-6 items-center'>
                            <h2 className='font-bold text-[36px]'></h2>
                            <span className='text-md' style={{ color: +parseFloat(result.coin?.changePercent24Hr??"0") < 0 ? 'red' : 'green' }}>
                                
                            </span>
                        </div>

                        <div className='min-w-[75%] flex flex-row justify-between gap-2'>
                            <button content='Add'  className=""/>
                            <button content='Back' className="" onClick={clickBack}/>
                        </div>

                        <div className='w-full flex flex-col items-center gap-4'>
                            <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                                <span className='text-lg text-gray-600'>Change</span>
                                <span className='text-lg font-bold'>{
                                    parseFloat(result.coin?.changePercent24Hr??"0").toFixed(2)
                                }%
                                </span>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                                <span className='text-lg text-gray-600'>Supply</span>
                                <span className='text-lg font-bold'>{
                                    parseFloat(result.coin?.supply??"0").toFixed(2)
                                }%
                                </span>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                                <span className='text-lg text-gray-600'>Max supply</span>
                                <span className='text-lg font-bold'>{
                                    parseFloat(result.coin?.maxSupply??"0").toFixed(2)
                                }%
                                </span>
                            </div>
                            <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                                <span className='text-lg text-gray-600'>Market Cap</span>
                                <span className='text-lg font-bold'>{
                                    parseFloat(result.coin?.marketCapUsd??"0").toFixed(2)
                                }%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
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