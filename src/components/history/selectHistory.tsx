import { useCallback } from "react";
import { HistoryParams } from "../../constants/historyParams";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import { setInterval } from "../../store/reducers/filterHistoryReducer";
import FilterHistory from "../../constants/types/filterHistory";

export default function SelectHistory({histories}:{histories: FilterHistory}){
    const dispatch=useAppDispatch();
    const onSelect=useCallback((x:string)=>{
        dispatch(setInterval(HistoryParams.find(el => el.value.interval === x)?.value as FilterHistory));
    },[histories])
    return(
        <select
            className={"bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
            onChange={(e)=>onSelect(e.currentTarget.value)}
        >
            {
                HistoryParams.map(el=>(
                    <option 
                        value={el.value.interval} 
                    >
                        {el.option}
                    </option>
                ))
            }
        </select>
    )
}