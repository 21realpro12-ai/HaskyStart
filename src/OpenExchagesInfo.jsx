import React from "react";
import './OpenExchagesInfo.css'
import './OpenTop10Crypto'

const OpenExchagesInfo = ({id,onClose}) => {
    function formatNumber(num) {
        if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + 'T';
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(2) + 'K';
        return num.toString();
    }
    return(
        <div className="MainWrap">
            <div className="ExcangerNameAndCountry">
                <div className="ImgAndName">
                    <h2>{id.name}</h2>
                    <img src={id.image} alt="" />
                </div>
                <div className="country"><h2>{id.country}</h2></div>
            </div>
            <div className="line"></div>
            <div className="ScoreAndVlume24H">
                <div className="Volune24H">
                    <h3>trade volume 24h:</h3>
                    <strong className="high">{formatNumber(id.trade_volume_24h_btc)}</strong>
                </div>  
                <div className="score">
                    <h3>
                        Trust Score:
                    </h3>
                    <strong>{id.trust_score}</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="URLandYear">
                <div className="Url">
                    <h3>Url:</h3>
                    <strong className="low">{id.url}</strong>
                </div>
                <div className="year">
                    <h3>Year Establisher:</h3>
                    <strong >{id.year_established}</strong>
                </div>
            </div>
            <div className="line"></div>
            <div className="Info">
                <strong>{id.description}</strong>
            </div>
            <div className="line"></div>
            <div className="but1">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default OpenExchagesInfo