import useMostPopularCoins from "../../utils/hooks/useMostPopularCoins";
import PopularCoinsWrapper from "./popularCoins/popularCoinsWrapper";
import Portfolio from "./portfolio/portfolio";

export default function Header() {
  const resultPopular = useMostPopularCoins();
  return (
    <header className="bg-blue-500 static top-0 z-50 px-4">
      <div className="flex flex-row justify-between gap-6">
        <PopularCoinsWrapper items={resultPopular.popularCoins} />
        <Portfolio />
      </div>
    </header>
  );
}
