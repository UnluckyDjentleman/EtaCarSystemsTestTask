import { useCallback } from "react"
import { options } from "../../constants/options"
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux"
import { setOrderBy, setPage } from "../../store/reducers/filterReducer";
export default function SortBy(){
    const dispatch=useAppDispatch();
    const order_by=useAppSelector(state=>state.filter.order_by)
    const onSelect=useCallback((str:string)=>{
        dispatch(setPage(0))
        dispatch(setOrderBy(str))
    },[order_by])
    return(
        <select
            className={"w-min rounded-md px-2 py-1 outline-none border"}
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