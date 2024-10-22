import PopularCoinsWrapper from "./popularCoins/popularCoinsWrapper";
import Portfolio from "./portfolio/portfolio";

export default function Header(){
    return(
        <header className="bg-blue-500 static top-0 z-50 px-4">
            <PopularCoinsWrapper/>
            <Portfolio/>
        </header>
    )
}