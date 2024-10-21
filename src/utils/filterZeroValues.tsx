import Assets from "../constants/types/assets";

const MIN_VAL=0.01

export class ZeroFiltrator{
    public static fiterZeroValues(data: Assets):boolean{
        if (Math.abs(+data.priceUsd) <= MIN_VAL) {
            return false;
        }
    
        if (Math.abs(+data.changePercent24Hr) <= MIN_VAL) {
            return false;
        }
    
        if (Math.abs(+data.marketCapUsd) <= MIN_VAL) {
            return false;
        }
    
        if (Math.abs(+data.maxSupply) <= MIN_VAL) {
            return false;
        }
    
        return true;
    }
}