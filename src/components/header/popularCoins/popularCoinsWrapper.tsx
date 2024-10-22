import Assets from "../../../constants/types/assets";
import useMostPopularCoins from "../../../utils/hooks/useMostPopularCoins";
import PopularCoinItem from "./popularCoinItem";

export default function PopularCoinsWrapper(){
    const resultPopular=useMostPopularCoins();

    return(
        <div className="flex space-x-4">
            {
                resultPopular.popularCoins&&(
                    (resultPopular.popularCoins as Assets[]).map(el=>(
                        <PopularCoinItem 
                            id={el.id}
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