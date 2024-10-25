import Assets from "../constants/types/assets";

const MIN_VAL=0.01

export class ApiValuesTransformer{
    public static fiterZeroValues(data: Assets):Assets{
        if (Math.abs(+data.priceUsd) <= MIN_VAL) {
            data.priceUsd=MIN_VAL.toString();
        }
    
        if (Math.abs(+data.changePercent24Hr) <= MIN_VAL) {
            data.changePercent24Hr=MIN_VAL.toString();
        }
    
        if (Math.abs(+data.marketCapUsd) <= MIN_VAL) {
            data.marketCapUsd=MIN_VAL.toString();
        }
    
        return data;
    }
    public static formatCost(data:Assets):Assets{
        //transform price
        const priceUsdLength=data.priceUsd.split('.')[0].length;
        if(priceUsdLength<3){
            data.priceUsd=Number(data.priceUsd).toFixed(2)
        }
        if(priceUsdLength>=3&&priceUsdLength<=5){
            data.priceUsd=(Number(data.priceUsd)/1000).toFixed(2)+"K"
        }
        else if(priceUsdLength>=6&&priceUsdLength<=8){
            data.priceUsd=(Number(data.priceUsd)/1000000).toFixed(2)+"M"
        }
        else if(priceUsdLength>=9&&priceUsdLength<=11){
            data.priceUsd=(Number(data.priceUsd)/1000000000).toFixed(2)+"B"
        }
        else{
            data.priceUsd=(Number(data.priceUsd)/1000000000000).toFixed(2)+"T"
        }
        //transform marketCap
        const marketCapLength=data.marketCapUsd.split('.')[0].length;
        if(marketCapLength<3){
            data.marketCapUsd=Number(data.marketCapUsd).toFixed(2)
        }
        if(marketCapLength>=3&&marketCapLength<=5){
            data.marketCapUsd=(Number(data.marketCapUsd)/1000).toFixed(2)+"K"
        }
        else if(marketCapLength>=6&&marketCapLength<=8){
            data.marketCapUsd=(Number(data.marketCapUsd)/1000000).toFixed(2)+"M"
        }
        else if(marketCapLength>=9&&marketCapLength<=11){
            data.marketCapUsd=(Number(data.marketCapUsd)/1000000000).toFixed(2)+"B"
        }
        else{
            data.marketCapUsd=(Number(data.marketCapUsd)/1000000000000).toFixed(2)+"T"
        }
        return data;
    }
}