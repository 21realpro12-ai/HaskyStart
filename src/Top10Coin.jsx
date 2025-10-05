import React, { useState } from "react";
import './Top10Coin.css';
import top10Data from './top10.json'; 
import OpenTop10Crypto from "./OpenTop10Crypto.jsx";

const Top10Coins = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Coin,setCoin] = useState(null);

    const openModal = (coin_id) => {
        setIsModalOpen(true);
        setCoin(coin_id)
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCoin(null)
    };

    const coin = top10Data.coins;

    return (
        <div className="Main">
            <div className="WrapTop10Coin">
                {coin.map((coin) => (
                    <div key={coin.id}>
                        <div className="CoinCard" onClick={() => openModal(coin)}>
                            <div className="CoinCardWrapper">
                                <div className="WrapperInfoText">
                                    <h1>{coin.name}</h1> - ${coin.current_price}
                                </div>
                                <img src={coin.image} alt="" />
                            </div>  
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && <OpenTop10Crypto onClose={closeModal} id={Coin} />}
        </div>
    );
};

export default Top10Coins;
