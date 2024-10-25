import AddPortfolio from "../../../constants/types/addPortfolio";
import { removeCoinFromPortfolio } from "../../../store/reducers/portfolioReducer";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import Button from "../../shared/button";

export default function CoinModalItem({ item }: { item: AddPortfolio }) {
  const dispatch = useAppDispatch();
  return (
    <li className="flex flex-row justify-between items-center px-4 py-6 border-y-1">
      <div className="flex flex-row items-center gap-2">
        <span className="text-lg">{`${item.asset.name} x${item.count}`}</span>
        <span className="text-lg">{`$${parseFloat(item.asset.priceUsd).toFixed(2)}`}</span>
      </div>

      <Button
        innerText='Delete'
        color='#ef4444'
        onClick={() => dispatch(removeCoinFromPortfolio(item.asset))}
      />
    </li>
  );
}
