import React from "react";
import { Link } from "react-router-dom";
import './TopMenu.css'

const TopMenu = () => {
  return (
    <div className="TopMenu">
        <div className="MainText">
          <h2>Hasky</h2>
        </div>
        <div className="Menu">
            <h4 className="nav">about</h4>
            <h4 className="nav"><Link to='/'>main</Link></h4>
            <h4 className="nav"><Link to='/exchanges'>exchanges</Link></h4>
            <h4 className="nav">btoke</h4>
        </div>
        <div className="button">
          <button>Connect Wallet</button>
        </div>
    </div>
  );
}

export default TopMenu