import Assets from "../../constants/types/assets";
import TableRaw from "./tableRaw";

export default function Table({items}:{items: Assets[]}){
    return(
        <table className="w-full">
          <thead>
            <tr>
              <td className="hidden sm:table-cell">Logo</td>
              <td className="hidden sm:table-cell">Symbol</td>
              <td className="hidden sm:table-cell">Price</td>
              <td className="hidden sm:table-cell">Market cap</td>
              <td className="hidden sm:table-cell">Change</td>
              <td className="hidden sm:table-cell">Add</td>
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