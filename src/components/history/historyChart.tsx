import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DataAssetsHistory from "../../constants/types/dataAssetsHistory";

export default function HistoryChart({ data }: { data: DataAssetsHistory[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="priceUsd" stroke="#3B82F6" />
        <CartesianGrid stroke="#ccc" />
        <XAxis className="text-xs sm:text-lg lg:text-xl" dataKey="time" />
        <YAxis className="text-xs sm:text-lg lg:text-xl" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
