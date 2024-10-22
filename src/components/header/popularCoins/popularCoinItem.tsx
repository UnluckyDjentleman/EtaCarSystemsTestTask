import { useCallback } from "react";
import { useNavigate } from "react-router"

export default function PopularCoinItem({id, image, name, symbol, price}:{id: string, image: string, name: string, symbol: string, price: number}){
    const navigate=useNavigate();
    const click=useCallback((x: string)=>{
        navigate('/coin/'+x);
    },[])
    return(
        <div className="rounded-lg bg-white shadow-md flex flex-col gap-1 items-start px-3 py-2" onClick={()=>click(id)}>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden items-center">
                        <img src={image} style={{height: '20px', width: '20px'}}/>
                    </div>
                    <div className="text-gray-900 font-bold text-xl items-center">{name}</div>
                </div>
                <div className="text-xs text-gray-600 items-center">
                    {symbol}
                </div>
                <p className="text-gray-700 text-base font-semibold">{price}$</p>
        </div>
    )
}