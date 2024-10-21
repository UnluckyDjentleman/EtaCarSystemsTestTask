import { useCallback } from "react";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import { setPage } from "../../store/reducers/filterReducer";

export default function Pagination({limit, offset, setOffset, length}:
    {limit:number, offset:number, setOffset:(x:number)=>void, length: number}){
    const dispatch=useAppDispatch();
    const onClickNext=useCallback(()=>{
        setOffset(offset+1);
        dispatch(setPage((offset+1)*limit));
      },[dispatch, offset]);
    
      const onClickPrev=useCallback(()=>{
        setOffset(offset-1);
        dispatch(setPage((offset-1)*limit));
      },[dispatch, offset]);
    return(
        <div className="flex justify-between items-center w-10">
            {
                offset>0&&(
                    <button className={'relative inline-flex items-center px-2 py-2 rounded-md border border-purple-500 bg-white text-sm font-medium text-gray-500 hover:bg-purple-500'} onClick={onClickPrev}>&#60;</button>
                )
            }{
                length>0&&(
                    <button className={'relative inline-flex items-center px-2 py-2 rounded-md border border-purple-500 bg-white text-sm font-medium text-gray-500 hover:bg-purple-500'} onClick={onClickNext}>&#62;</button>
                )
            }
        </div>
    )
}