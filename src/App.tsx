import './App.css'
import Assets from './constants/types/assets';
import useCoins from './hooks/useCoins'

function App() {
  const result=useCoins({limit:20, offset: undefined, ids:undefined, search: undefined});

  console.log(result);

  return (
    <>
      {
        result.load==="Loading"&&(
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
          //set it to other component, it's just for view
          <table className="table-auto">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Supply</th>
              <th>Max supply</th>
              <th>Market cap</th>
              <th>Change</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {
              (result.coins as Assets[]).map(el=>(
                //in other component
                <>                
                  <tr>
                    <td>
                      <div style={{width:'20px', height:'20px'}}>
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${el.rank}.png`} />
                      </div>
                    </td>
                    <td>
                      {el.name}
                    </td>
                    <td>
                      {el.symbol}
                    </td>
                    <td>
                      {el.priceUsd}
                    </td>
                    <td>
                      {parseFloat(el.supply).toFixed(2)}
                    </td>
                    <td>
                      {parseFloat(el.maxSupply??0).toFixed(2)}
                    </td>
                    <td>
                      {parseFloat(el.marketCapUsd).toFixed(2)}
                    </td>
                    <td>
                      {parseFloat(el.changePercent24Hr).toFixed(2)+"%"}
                    </td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                      </button>
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>
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
