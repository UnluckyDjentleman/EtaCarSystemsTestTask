import Assets from "../constants/types/assets";

const MIN_VAL=0.01

export class ZeroFiltrator{
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
}