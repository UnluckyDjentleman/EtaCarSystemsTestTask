import { useContext, useState } from "react";
import Assets from "../../constants/types/assets";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import { addCoinToPortfolio } from "../../store/reducers/portfolioReducer";
import { ModalContext } from "./context/modal.context";
export default function ModalAdd({coin}:{coin:Assets}){
    const [count, setCount]=useState<number>(1);
    const {closeModal}=useContext(ModalContext)
    const dispatch=useAppDispatch();
    function submitBuying(e:React.MouseEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(addCoinToPortfolio({asset: coin, count: count}))
    }

    return(
        <>
        <div
                className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-60'
                onClick={() => closeModal()}
        ></div>
        <div
        className='fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white' data-testid='modal-add'>
            <div className='w-[300px] sm:w-[400px] px-6 py-8'>
                <div className='flex flex-row items-center gap-2'>
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.rank}.png`} style={{height: '20px', width: '20px'}} />
                    <span className='font-bold text-lg'>{coin.name}</span>
                    <span className='text-gray-500'>{coin.symbol}</span>
                </div>

                <div className='flex flex-row gap-6 items-center mb-4'>
                    <h2 className='font text-[36px]'>{`$${parseFloat(coin.priceUsd).toFixed(4)}`}</h2>
                    <span style={{ color: +coin.changePercent24Hr < 0 ? 'red' : 'green' }} className='text-md'>
                        {`${parseFloat(coin.changePercent24Hr).toFixed(3)}%`}
                    </span>
                </div>

                <form className='w-full' onSubmit={submitBuying}>
                    <div className='mb-4'>
                        <input
                            type='number'
                            data-testid="input"
                            min={1}
                            max={50}
                            value={count}
                            onChange={(e) => setCount(+e.target.value)}
                            placeholder='Enter how much you wanna buy...'
                            className='w-full px-3 py-2 border-2 border-slate-600 outline-none rounded-md'
                        />
                    </div>

                    <button
                        type='submit'
                        className='bg-green-400 block mx-auto w-[200px] sm:w-[320px] rounded-lg px-4 py-2'
                    >
                        Buy coin
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}