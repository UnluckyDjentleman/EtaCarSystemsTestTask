import { useRef } from "react";
import Pagination from "../components/pagination/pagination";
import Assets from "../constants/types/assets";
import useCoins from "../utils/hooks/useCoins";
import { useAppSelector } from "../utils/hooks/useRedux";
import Filter from "../constants/types/filter";
import Input from "../components/searchBar/input";
import SortBy from "../components/searchBar/sortBy";
import Loader from "../components/shared/loader";
import Table from "../components/table/table";
import ErrorMessage from "../components/error/error";

function MainPage() {
  const coinFilter = useAppSelector((state) => state.filter);
  const result = useCoins({
    limit: coinFilter.limit,
    offset: coinFilter.offset,
    ids: coinFilter.ids,
    search: coinFilter.search,
    order_by: coinFilter.order_by,
  });

  const defaultCoinFilter = useRef<Filter>(coinFilter);
  const coinsList = useRef<{ results: Assets[] }>({ results: [] });

  if (result.load === true) {
    coinsList.current.results = result.coins as Assets[];
  } else if (result.load === "Loading...") {
    if (
      defaultCoinFilter.current.search !== coinFilter.search ||
      defaultCoinFilter.current.order_by !== coinFilter.order_by
    ) {
      coinsList.current = { results: [] };
      defaultCoinFilter.current = coinFilter;
    }
  }

  return (
    <div className="mx-auto">
      <div className="container mx-auto px-2 md:px-0">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-2">
          <div className={"w-min"}>
            <Input />
          </div>
          <div className={"w-min"}>
            <SortBy />
          </div>
        </div>
      </div>
      {result.load === "Loading..." && <Loader />}
      {result.load === true && (
        <section>
          <div className="container mx-auto px-2 md:px-0">
            <Table items={coinsList.current.results}></Table>
            <Pagination
              limit={20}
              offset={coinFilter.offset}
              length={coinsList.current.results.length}
            ></Pagination>
          </div>
        </section>
      )}
      {result.error && <ErrorMessage message={result.error.message} />}
    </div>
  );
}

export default MainPage;
