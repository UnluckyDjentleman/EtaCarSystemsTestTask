import { useContext } from "react";
import { useAppSelector } from "../../utils/hooks/useRedux"
import CoinModalItem from "./components/coinModalItem"
import { ModalContext } from "./context/modal.context"

export default function ModalPortfolio(){
    const {coins,summary}=useAppSelector(state=>state.portfolio)
    const {closeModal}=useContext(ModalContext);
    return(
        <>
        <div className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-60' onClick={() => closeModal()}>
        </div>
        <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
        <div className='w-[300px] sm:w-[400px] px-6 py-8'>
                <p className='mb-6'>
                    <span className='text-lg'>{'Current summary: '}</span>
                    <span className='text-lg font-bold'>{summary.toFixed(2)}</span>
                </p>

                <div className='flex flex-row items-center gap-2'>
                    <span className='font-bold text-lg'>Portfolio</span>
                </div>
                <div>
                    {
                        coins.map(el=>(
                            <CoinModalItem item={el}></CoinModalItem>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}