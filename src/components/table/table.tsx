import Assets from "../../constants/types/assets";
import TableRaw from "./tableRaw";

export default function Table({items}:{items: Assets[]}){
    return(
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
                items.map(el=>(
                    <TableRaw item={el}></TableRaw>
                ))
            }
          </tbody>
        </table>
    )
}