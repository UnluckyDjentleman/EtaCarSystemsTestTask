import {useRef, useState } from 'react';
import Header from './components/header/header';
import Pagination from './components/pagination/pagination';
import Assets from './constants/types/assets';
import useCoins from './hooks/useCoins'
import { useAppSelector } from './hooks/useRedux';
import Filter from './constants/types/filter';
import Input from './components/searchBar/input';
import SortBy from './components/searchBar/sortBy';

function App() {
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


  return (
    <>
      <Header/>
      <div className="flex flex-wrap">
        <Input/>
        <SortBy/>
      </div>
      {
        result.load==="Loading..."&&(
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
              <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
                  <div className="bg-white rounded-full">
                      <div className="w-24 h-24 rounded-full"></div>
                  </div>
              </div>
          </div>
        )
      }
      {
        result.load===true&&(
          <>
          <table className="table-auto w-full text-center text-sm text-surface dark:text-white">
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
                  <tr>
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

export default App
