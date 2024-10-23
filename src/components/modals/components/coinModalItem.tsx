import AddPortfolio from "../../../constants/types/addPortfolio";
import { removeCoinFromPortfolio } from "../../../store/reducers/portfolioReducer";
import { useAppDispatch } from "../../../utils/hooks/useRedux";

export default function CoinModalItem({item}:{item: AddPortfolio}){
    const dispatch=useAppDispatch();
    return (
        <li className='flex flex-row justify-between items-center px-4 py-6 border-y-1'>
            <div className='flex flex-row items-center gap-2'>
                <span className='text-lg'>{`${item.asset.name} x${item.count}`}</span>
                <span className='text-lg'>{`$${parseFloat(item.asset.priceUsd).toFixed(2)}`}</span>
            </div>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>dispatch(removeCoinFromPortfolio(item.asset))}>
                Delete
            </button>
        </li>
    );
}