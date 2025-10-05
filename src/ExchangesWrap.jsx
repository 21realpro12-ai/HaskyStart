import React,{useState} from "react";
import './ExchangesWrap.css'
import Exchanges from "./Exchanges";
import allexchanges_crypto from './allexchanges_crypto.json'
import OpenExchagesInfo from "./OpenExchagesInfo";

const ExchangesWrap = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Coin,setCoin] = useState(null);
    
    const openModal = (exchanges_id) => {
        setIsModalOpen(true);
        setCoin(exchanges_id)
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setCoin(null)
    };

    const exchanges = allexchanges_crypto.exchanges;
    return (
        <div className="ExchangesWrapStyle">
            {exchanges.map((exchanges) => (
                    <div key={exchanges.id}>
                        <div className="ExchangesCard" onClick={() => openModal(exchanges)}>
                            <div className="ExchangesCardWrapper">
                                <div className="WrapperInfoText">
                                    <div className="NameAndImg">
                                        <h1>{exchanges.name}</h1>
                                        <img src={exchanges.image} alt="" />
                                    </div>
                                     - Country: {exchanges.country}   
                                </div>
                            </div>
                        </div>                          
                    </div>                        
                ))}
                {isModalOpen && <OpenExchagesInfo onClose={closeModal} id={Coin} />}
        </div>
    )
}

export default ExchangesWrap