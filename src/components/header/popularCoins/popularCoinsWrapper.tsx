import Assets from "../../../constants/types/assets";
import PopularCoinItem from "./popularCoinItem";

export default function PopularCoinsWrapper({items}:{items:Assets[]}){

    return(
        <div className="scroll flex flex-row justify-start items-center gap-12 py-2 w-2/3 lg:w-3/4 xl:w-4/5 overflow-x-auto scroll-p-3">
            {
                items&&(
                    (items as Assets[]).map(el=>(
                        <PopularCoinItem item={el}/>
                    ))
                )
            }
        </div>
    )
}