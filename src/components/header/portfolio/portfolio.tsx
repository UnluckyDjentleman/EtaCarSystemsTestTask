import { useContext } from "react";
import { useAppSelector } from "../../../utils/hooks/useRedux";
import { ModalContext } from "../../modals/context/modal.context";
import useDifference from "./hooks/useDifference";

 export default function Portfolio(){
    const { summary } = useAppSelector((state) => state.portfolio);
    const { difference, percents } = useDifference();
    const {viewModalList}=useContext(ModalContext)

    return (
        <div
            className='bg-purple-500 cursor-pointer min-h-[100%] px-3 py-2 flex flex-col justify-center items-start gap-2'
            data-testid='portfolio-info'
            onClick={()=>viewModalList()}
        >
            <span className='text-xs sm:text-lg lg:text-xl text-white'>{`${summary.toFixed(2)}`}</span>
            <span style={{ color: difference < 0 ? 'red' : 'green' }} className='text-xs sm:text-lg lg:text-xl'>
                {`$${difference.toFixed(2)} (${percents.toFixed(2)}%)`}
            </span>
        </div>
    );
 }