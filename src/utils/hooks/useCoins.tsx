import { useEffect, useState } from "react";
import Assets from "../../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../api";
import Filter from "../../constants/types/filter";
import { ApiValuesTransformer } from "../apiValuesTransformer";

export default function useCoins(filter: Filter) {
  const [coins, setCoins] = useState<Assets[]>();
  const [load, setLoad] = useState<boolean | string>();
  const [error, setError] = useState<AxiosError>();

  const elementsOnPage:number=20;

  useEffect(() => {
    setLoad("Loading...");
    CoinsAPI.GetCoins(filter)
      .then((data) => {
        switch (filter.order_by) {
          case "":
            setCoins(
              data.data
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage))
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .map((el) => ApiValuesTransformer.formatCost(el)),
            );
            break;
          case "pricedesc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(b.priceUsd) - parseFloat(a.priceUsd),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
          case "priceasc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(a.priceUsd) - parseFloat(b.priceUsd),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
          case "changedesc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(b.changePercent24Hr) -
                    parseFloat(a.changePercent24Hr),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
          case "changeasc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(a.changePercent24Hr) -
                    parseFloat(b.changePercent24Hr),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
          case "marketcapdesc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
          case "marketcapasc":
            setCoins(
              data.data
                .map((el) => ApiValuesTransformer.fiterZeroValues(el))
                .sort(
                  (a: Assets, b: Assets) =>
                    parseFloat(a.marketCapUsd) - parseFloat(b.marketCapUsd),
                )
                .map((el) => ApiValuesTransformer.formatCost(el))
                .slice(filter.offset*elementsOnPage,((filter.offset+1)*elementsOnPage)),
            );
            break;
        }
        setLoad(true);
      })
      .catch((error) => {
        setError(error);
        setLoad(false);
      });
  }, [filter.offset, filter.search, filter.order_by]);

  return { error, coins, load };
}
