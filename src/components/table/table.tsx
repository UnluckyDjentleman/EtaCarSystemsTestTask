import Assets from "../../constants/types/assets";
import TableRaw from "./tableRaw";

export default function Table({items}:{items: Assets[]}){
    return(
        <table className="w-full">
          <thead>
            <tr>
              <th>Logo</th>
              <th className="hidden sm:table-cell">Symbol</th>
              <th>Price</th>
              <th className="hidden sm:table-cell">Market cap</th>
              <th>Change</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {
                items.map(el=>(
                    <TableRaw item={el}></TableRaw>
                ))
            }
          </tbody>
        </table>
    )
}