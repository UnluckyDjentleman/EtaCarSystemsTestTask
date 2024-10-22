import { useCallback} from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { setPage, setSearch } from "../../store/reducers/filterReducer";

export default function Input(){
    const dispatch=useAppDispatch();
    const search=useAppSelector(state=>state.filter.search)
    const setSearchString=useCallback((str: string)=>{
        dispatch(setPage(0))
        dispatch(setSearch(str));
    },[search])
    return(
        <>
            <input 
            type="text"
            value={search} 
            onChange={e=>setSearchString(e.currentTarget.value)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={'Enter coin name'}/>
        </>
    )
}