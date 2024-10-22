import Assets from "../../constants/types/assets";
import TableRaw from "./tableRaw";

export default function Table({items}:{items: Assets[]}){
    return(
        <table className="w-full">
          <thead>
            <tr>
              <td>Logo</td>
              <td className="hidden sm:table-cell">Symbol</td>
              <td className="hidden sm:table-cell">Price</td>
              <td>Market cap</td>
              <td>Change</td>
              <td>Add</td>
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