import useCoinsByIds from "../../../../utils/hooks/useCoinsIds";
import { useAppSelector } from "../../../../utils/hooks/useRedux";

export default function useDifference() {
  const { coins: prevCoins, summary: prevSummary } = useAppSelector(
    (state) => state.portfolio,
  );
  const nowCoins = useCoinsByIds(prevCoins.map((el) => el.asset.id)).coins;

  let difference: number = 0;
  let percents: number = 0;

  if (nowCoins) {
    let newSummary: number = 0;

    for (const newCoin of nowCoins) {
      const oldCoin = prevCoins.find((c) => c.asset.id === newCoin.id);
      if (oldCoin) {
        newSummary += +newCoin.priceUsd * oldCoin.count;
      }
    }

    difference = newSummary - prevSummary;
    percents = (newSummary - prevSummary) / prevSummary || 0;
  }

  return { difference, percents };
}
