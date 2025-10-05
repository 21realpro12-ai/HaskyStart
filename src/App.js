import React from 'react';
import './App.css';
import TopMenu from './TopMenu'
import Top10Coin from './Top10Coin'
import Top10Text from './Top10Text';
import All1_Crypto_Wrap from './All1_Crypto_Wrap';
import AllCryptoText from './AllCryptoText';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Main.jsx';
import Exchanges from './Exchanges.jsx';

function App() {
  return (
    <BrowserRouter>
      <TopMenu/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
