export default function PopularCoinItem({image, name, symbol, price}:{image: string, name: string, symbol: string, price: number}){
    return(
        <div className="flex border border-gray-400 lg:border-gray-400 bg-white rounded p-3 flex-col justify-between mt-6 mb-6">
                <div className="flex justify-center space-x-1">
                    <div className="flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden items-center">
                        <img src={image} style={{height: '20px', width: '20px'}}/>
                    </div>
                    <div className="text-gray-900 font-bold text-xl items-center">{name}</div>
                </div>
                <div className="text-xs text-gray-600 items-center">
                    {symbol}
                </div>
                <p className="text-gray-700 text-base font-semibold">{price}$</p>
        </div>
    )
}