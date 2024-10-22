import { useNavigate } from "react-router";
import Assets from "../../constants/types/assets";
import { useContext } from "react";
import { ModalContext } from "../modals/context/modal.context";

export default function TableRaw({item}:{item:Assets}){
    const {viewCoinAddModal}=useContext(ModalContext);
    const navigate=useNavigate();
    const onSetId=(x: string)=>{
        navigate("/coin/"+x)
    }
    return (
        <tr onClick={()=>onSetId(item.id)}>
            <td className="px-6 py-4">
            <div className="flex w-10 h-10 col items-center">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.rank}.png`} />
                <span>{item.name}</span>
            </div>
            </td>
            <td className="px-6 py-4">
            <span>{item.symbol}</span>
            </td>
            <td className="px-6 py-4">
            <span>{item.priceUsd}$</span>
            </td>
            <td className="px-6 py-4">
            <span>{parseFloat(item.marketCapUsd??0).toFixed(2)}$</span>
            </td>
            <td className="px-6 py-4">
            <span className={parseFloat(item.changePercent24Hr??0)<0?"text-red-500":"text-green-500"}>{(parseFloat(item.changePercent24Hr??0)??0).toFixed(2)}%</span>
            </td>
            <td className="px-6 py-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={e=>{
                e.stopPropagation();
                console.log(item);
                viewCoinAddModal(item)
            }}>
                Add
            </button>
            </td>
        </tr>
    )
}