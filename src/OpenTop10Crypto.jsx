import React,{useState} from "react";
import './OpenTop10Crypto.css'

const OpenTop10Crypto = ({id,onClose}) =>{
    function formatNumber(num) {
        if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + 'T';
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(2) + 'K';
        return num.toString();
    }


    return(
        <div className="OpenMenuClass">
            <div className="PriceAndName">
                <div className="WrapperForHat">
                    <h1>{id.name}</h1>
                    <img src={id.image} alt="" />
                </div>
                <h2>{id.current_price} <span className="span">$</span></h2>
            </div>
            <div className="line"></div>
            <div className="ATLANDATH">
                <div className="spa">
                     <h4>ATH:</h4>
                     <h3 className="high">{id.ath}</h3>
                     <strong>$</strong>
                </div>
                <div className="spa">
                     <h4>ATL:</h4>
                     <h3 className="low">{id.atl}</h3>
                     <strong>$</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="SupplyAndValuation">
                <div className="spa">
                    <h3>
                        supply:
                    </h3>
                    <strong className="another">{formatNumber(id.circulating_supply)}</strong>
                    <strong>$</strong>
                </div>
                <div className="spa">
                    <h3>valuation:</h3>
                    <h4 className="another">{formatNumber(id.fully_diluted_valuation)}</h4>
                    <strong>$</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="LowHigh24">
                <div className="H24h">
                    <h3>High 24:</h3>
                    <strong className="high">{id.high_24h}</strong>
                    <strong>$</strong>
                </div>
                <div className="L24h">
                    <h3>Low 24:</h3>
                    <strong className="low">{id.low_24h}</strong>
                    <strong>$</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="SupplyAndVolume">
                <div className="Volume">
                    <h3>Total Volume:</h3>
                    <strong>{formatNumber(id.total_volume)}</strong>
                </div>
                <div className="SupplyTotal">
                    <h3>Total Supply:</h3>
                    <strong>{formatNumber(id.total_supply)}</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="MarcketCapRang">
                <h1> Cap Rang {id.market_cap_rank}</h1>
            </div>
            <div className="but1">
                <button onClick={onClose}>Close</button>
            </div>

        </div>
    )
}

export default OpenTop10Crypto