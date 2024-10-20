import { useNavigate } from "react-router";
import useCoin from "../utils/hooks/useCoin";
import { useAppSelector } from "../utils/hooks/useRedux";
import useCoinHistory from "../utils/hooks/useCoinHistory";
import Loader from "../components/loader/loader";
import { LineChart, YAxis, XAxis, Line, CartesianGrid, Tooltip } from "recharts";

export default function CoinInfo(){
    const filterHistory=useAppSelector(state=>state.filterHistory)
    const navigate=useNavigate();
    const hrefs=window.location.pathname.split("/");
    const id=hrefs[hrefs.length-1];

    const result=useCoin(id);
    const coinHistory=useCoinHistory(id,filterHistory)

    const clickBack=()=>{
        navigate("/")
    }

    return(
        <>
        {
            result.load==="Loading..."&&(
                <Loader></Loader>
            )
        }
        {
            result.load===true&&(
                <div className="flex flex-wrap">
                    <div className="">
                        {
                            result.coin?.name
                        }
                        <button onClick={clickBack}>Back</button>
                    </div>
                    <div>
                        <LineChart width={500} height={300} className='mx-auto' data={coinHistory.history}>
                            <Line type='monotone' dataKey='priceUsd' stroke='#8884d8' />
                            <CartesianGrid stroke='#ccc' />
                            <XAxis className='text-xs sm:text-lg lg:text-xl' dataKey='time' tick={false}/>
                            <YAxis className='text-xs sm:text-lg lg:text-xl' />
                            <Tooltip />
                        </LineChart>
                    </div>
                </div>
            )
        }
        </>
    )
}