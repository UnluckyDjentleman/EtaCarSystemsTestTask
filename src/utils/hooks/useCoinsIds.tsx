import { useEffect, useState } from "react";
import Assets from "../../constants/types/assets";
import { AxiosError } from "axios";
import CoinsAPI from "../api";

export default function useCoinsByIds(ids: string[]) {
  const [coins, setCoins] = useState<Assets[]>();
  const [load, setLoad] = useState<boolean | string>();
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoad("Loading...");
    CoinsAPI.GetCoinsByIds(ids)
      .then((data) => {
        setCoins(data.data);
        setLoad(true);
      })
      .catch((error) => {
        setError(error);
        setLoad(false);
      });
  }, []);

  return { error, coins, load };
}
