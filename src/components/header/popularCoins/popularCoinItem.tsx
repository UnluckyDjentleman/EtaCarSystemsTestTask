import Assets from "../../../constants/types/assets";
import { Link } from "react-router-dom";
export default function PopularCoinItem({ item }: { item: Assets }) {
  return (
    <Link to={`/coin/${item.id}`} state={item}>
      <div className="rounded-lg bg-white shadow-md flex flex-col gap-1 items-start px-3 py-2">
        <div className="flex flex-row items-center gap-2">
          <div className="flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden items-center h-10 w-10">
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.rank}.png`}
            />
          </div>
          <div className="text-gray-900 font-bold text-xl items-center">
            {item.name}
          </div>
        </div>
        <div className="text-xs text-gray-600 items-center">{item.symbol}</div>
        <p className="text-gray-700 text-base font-semibold">
          {item.priceUsd}$
        </p>
      </div>
    </Link>
  );
}
