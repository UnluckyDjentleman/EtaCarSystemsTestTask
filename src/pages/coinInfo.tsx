import useCoin from "../utils/hooks/useCoin";
import { useAppSelector } from "../utils/hooks/useRedux";
import useCoinHistory from "../utils/hooks/useCoinHistory";
import Loader from "../components/shared/loader";

import SelectHistory from "../components/history/selectHistory";
import Assets from "../constants/types/assets";
import CoinDescription from "../components/info/coinInfo";
import { useLocation } from "react-router";
import ErrorMessage from "../components/error/error";
import HistoryChart from "../components/history/historyChart";
import DataAssetsHistory from "../constants/types/dataAssetsHistory";

export default function CoinInfo() {
  const filterHistory = useAppSelector((state) => state.filterHistory);
  const { state: coin } = useLocation();
  const result = useCoin(coin !== null ? coin.id : undefined);
  const coinHistory = useCoinHistory(
    coin !== null ? coin.id : undefined,
    filterHistory,
  );

  return (
    <>
      {result.load === "Loading..." && <Loader></Loader>}
      {(result.error || coin === null) && (
        <ErrorMessage message={result.error?.message as string} />
      )}
      {result.load === true && (
        <div className="container mx-auto gap-1 xs:gap-0">
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-2">
            <div className="py-4 px-1 mx-auto w-full md:w-[470px]">
              <CoinDescription item={result.coin as Assets} />
            </div>
            <div className="py-4 px-1 mx-auto w-full md:w-[470px]">
              <HistoryChart data={coinHistory.history as DataAssetsHistory[]} />
              <SelectHistory histories={filterHistory}></SelectHistory>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
