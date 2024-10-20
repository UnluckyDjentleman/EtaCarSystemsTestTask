import { useRef, useState } from 'react';
import Pagination from '../components/pagination/pagination';
import Assets from '../constants/types/assets';
import useCoins from '../utils/hooks/useCoins'
import { useAppSelector } from '../utils/hooks/useRedux';
import Filter from '../constants/types/filter';
import Input from '../components/searchBar/input';
import SortBy from '../components/searchBar/sortBy';
import { useNavigate } from 'react-router';
import Loader from '../components/loader/loader';

function MainPage() {
  const navigate=useNavigate();
  const coinFilter=useAppSelector(state=>state.filter)
  const result=useCoins({
    limit: coinFilter.limit,
    offset: coinFilter.offset,
    ids: coinFilter.ids,
    search: coinFilter.search,
    order_by: coinFilter.order_by
  });

  const [offset, setOffset]=useState<number>(0)

  const defaultCoinFilter=useRef<Filter>(coinFilter);
  const coinsList=useRef<{results: Assets[]}>({results: []})

  if (result.load === true) {
    console.log(coinsList.current.results);
    coinsList.current.results = result.coins as Assets[];
  }
  else if (result.load === "Loading...") {
    if (defaultCoinFilter.current.search !== coinFilter.search||defaultCoinFilter.current.order_by!==coinFilter.order_by) {
      coinsList.current = {results: []}
      defaultCoinFilter.current = coinFilter
    }
  }

  const onSetId=(x: string)=>{
    navigate("/coin/"+x)
  }

  return (
    <>
      <div className="container mx-auto px-2 md:px-0">
        <Input/>
        <SortBy/>
      </div>
      {
        result.load==="Loading..."&&(
          <Loader/>
        )
      }
      {
        result.load===true&&(
          <>
          <table className="min-w-full divide-y divide-gray-200">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">Logo</th>
              <th scope="col" className="px-6 py-4">Symbol</th>
              <th scope="col" className="px-6 py-4">Price</th>
              <th scope="col" className="px-6 py-4">Market cap</th>
              <th scope="col" className="px-6 py-4">Change</th>
              <th scope="col" className="px-6 py-4">Add</th>
            </tr>
          </thead>
          <tbody>
            {
              (coinsList.current.results as Assets[]).map(el=>(
                //in other component
                <>                
                  <tr onClick={()=>onSetId(el.id)}>
                    <td className="px-6 py-4">
                      <div className="flex w-10 h-10 col items-center">
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${el.rank}.png`} />
                        <span>{el.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span>{el.symbol}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span>{el.priceUsd}$</span>
                    </td>
                    <td className="px-6 py-4">
                      <span>{parseFloat(el.marketCapUsd??0).toFixed(2)}$</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={parseFloat(el.changePercent24Hr??0)<0?"text-red-500":"text-green-500"}>{(parseFloat(el.changePercent24Hr??0)??0).toFixed(2)}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Add
                      </button>
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>
       <Pagination limit={defaultCoinFilter.current.limit} offset={offset} setOffset={setOffset} length={coinsList.current.results.length}></Pagination>
        </>
        )
      }
      {
        result.error&&(
          <h2>{result.error.message}</h2>
        )
      }
    </>
  )
}

export default MainPage
