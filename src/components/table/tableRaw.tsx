import { useNavigate } from "react-router";
import Assets from "../../constants/types/assets";
import { useContext } from "react";
import { ModalContext } from "../modals/context/modal.context";
import Button from "../shared/button";

export default function TableRaw({ item }: { item: Assets }) {
  const { viewCoinAddModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const onSetId = () => {
    navigate(`/coin/${item.id}`, { state: item });
  };
  return (
    <tr
      onClick={onSetId}
      className={
        "py-2 border-y-2 border-gray-200 hover:bg-blue-100 cursor-pointer"
      }
    >
      <td className="sm:table-cell py-6 text-center mx-auto">
        <div className="flex w-10 h-10 col items-center">
          <img
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.rank}.png`}
          />
        </div>
      </td>
      <td className="hidden xl:table-cell px-4 py-6 text-center">
        <span>{item.name}</span>
      </td>
      <td className="hidden sm:table-cell px-4 py-6 text-center">
        <span>{item.symbol}</span>
      </td>
      <td className="sm:table-cell px-4 py-6 text-center">
        <span>${item.priceUsd}</span>
      </td>
      <td className="hidden sm:table-cell px-4 py-6 text-center">
        <span>${item.marketCapUsd}</span>
      </td>
      <td className="sm:table-cell px-4 py-6 text-center">
        <span
          className={
            parseFloat(item.changePercent24Hr ?? 0) < 0
              ? "text-red-500"
              : "text-green-500"
          }
        >
          {(parseFloat(item.changePercent24Hr ?? 0) ?? 0).toFixed(2)}%
        </span>
      </td>
      <td className="sm:table-cell px-4 py-6 text-center">
        <Button
          innerText='Add'
          color='#22c55e'
          onClick={(e) => {
            e.stopPropagation();
            console.log(item);
            viewCoinAddModal(item);
          }}/>
      </td>
    </tr>
  );
}
