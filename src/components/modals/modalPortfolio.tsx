import { useAppSelector } from "../../utils/hooks/useRedux";
import CoinModalItem from "./components/coinModalItem";

export default function ModalPortfolio() {
  const { coins, summary } = useAppSelector((state) => state.portfolio);
  return (
    <div className="w-[300px] sm:w-[400px] px-6 py-8" data-testid="modal-list">
      <p className="mb-6">
        <span className="text-lg">{"Current summary: "}</span>
        <span className="text-lg font-bold">{summary.toFixed(2)}</span>
      </p>

      <div className="flex flex-row items-center gap-2">
        <span className="font-bold text-lg">Portfolio</span>
      </div>
      <div>
        {coins.map((el) => (
          <CoinModalItem item={el}></CoinModalItem>
        ))}
      </div>
    </div>
  );
}
