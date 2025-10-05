import React, {useState} from "react";
import all_crypto from './all_crypto.json'
import OpenTop10Crypto from "./OpenTop10Crypto.jsx";
import './OpenTop10Crypto.css'
import './All1_Crypto_Wrap.css'

const All1_Crypto_Wrap = () =>{
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

    const coin = all_crypto.coins;

    return(
        <div className="MainAllCoinWrap">
            {isModalOpen && <OpenTop10Crypto onClose={closeModal} id={Coin} />}
            <div className="WrapAllCoin">
                    {coin.map((coin) => (
                        <div key={coin.id}>
                            <div className="CoinCardAll" onClick={() => openModal(coin)}>
                                <div className="CoinCardWrapper">
                                    <div className="WrapperInfoText">
                                        <h1>{coin.name}</h1> - ${coin.current_price}   
                                    </div>
                                    <img className="image" src={coin.image} alt="" />
                                </div>
                            </div>                          
                        </div>                        
                    ))}
            </div>
        </div>
    );
};

export default All1_Crypto_Wrap