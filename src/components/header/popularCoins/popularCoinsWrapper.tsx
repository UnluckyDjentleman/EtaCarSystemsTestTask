import Assets from "../../../constants/types/assets";
import useMostPopularCoins from "../../../hooks/useMostPopularCoins";
import PopularCoinItem from "./popularCoinItem";

export default function PopularCoinsWrapper(){
    const resultPopular=useMostPopularCoins();

    return(
        <div className="flex flex-wrap space-x-4 justify-center">
            {
                resultPopular.popularCoins&&(
                    (resultPopular.popularCoins as Assets[]).map(el=>(
                        <PopularCoinItem 
                            image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${el.rank}.png`}
                            name={el.name}
                            symbol={el.symbol}
                            price={parseFloat(el.priceUsd)}/>
                    ))
                )
            }
        </div>
    )
}