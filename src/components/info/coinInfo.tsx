import { useNavigate } from "react-router";
import Assets from "../../constants/types/assets";

export default function CoinDescription({item}:{item:Assets}){
    const navigate=useNavigate();
    const clickBack=()=>{
        navigate("/");
    }
    return(
        <div className='flex flex-col items-start gap-2 sm:gap-4'>
            <div className='flex flex-row items-center gap-2'>
                <span className='font-bold text-lg'>{item.name}</span>
                <span className='text-gray-500'>{item.symbol}</span>
            </div>

            <div className='flex flex-row gap-6 items-center'>
                <h2 className='font-bold text-[36px]'></h2>
                <span className='text-md' style={{ color: parseFloat(item.changePercent24Hr??"0") < 0 ? 'red' : 'green' }}>
                    {
                        item.changePercent24Hr
                    }%
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
                        parseFloat(item.changePercent24Hr??"0").toFixed(2)
                    }%
                    </span>
                </div>
                <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                    <span className='text-lg text-gray-600'>Supply</span>
                    <span className='text-lg font-bold'>{
                        parseFloat(item.supply??"0").toFixed(2)
                    }%
                    </span>
                </div>
                <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                    <span className='text-lg text-gray-600'>Max supply</span>
                    <span className='text-lg font-bold'>{
                        parseFloat(item.maxSupply??"0").toFixed(2)
                    }%
                    </span>
                </div>
                <div className='w-full flex flex-row justify-between items-center py-2 border-b-2 border-gray-400'>
                    <span className='text-lg text-gray-600'>Market Cap</span>
                    <span className='text-lg font-bold'>{
                        parseFloat(item.marketCapUsd??"0").toFixed(2)
                    }%
                    </span>
                </div>
            </div>
        </div>
    )
}