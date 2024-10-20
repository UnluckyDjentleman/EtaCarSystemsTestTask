import { useCallback } from "react"
import { options } from "../../constants/options"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux"
import { setOrderBy } from "../../store/reducers/filterReducer";
export default function SortBy(){
    const dispatch=useAppDispatch();
    const order_by=useAppSelector(state=>state.filter.order_by)
    const onSelect=useCallback((str:string)=>{
        dispatch(setOrderBy(str))
    },[order_by])
    return(
        <select
            className={"bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
            onChange={(e)=>onSelect(e.currentTarget.value)}
        >
            {
                options.map(el=>(
                    <option 
                        value={el.value} 
                    >
                        {el.option}
                    </option>
                ))
            }
        </select>
    )
}