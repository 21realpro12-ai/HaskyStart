import React from "react";
import Top10Coin from "./Top10Coin";
import Top10Text from "./Top10Text";
import All1_Crypto_Wrap from "./All1_Crypto_Wrap";
import AllCryptoText from "./AllCryptoText";

const Main = () => {
    return(
        <div>
            <Top10Text/>
            <Top10Coin/>
            <AllCryptoText/>
            <All1_Crypto_Wrap/>
        </div>
    )
}

export default Main