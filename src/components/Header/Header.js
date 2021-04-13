import React from "react";
import logo from './logo.png';
import * as headerStyles from './Header.module.css';

function Header(props) {
    return (
        <div className={headerStyles.appHeader}>            
            <img src={logo} className={headerStyles.appLogo} alt="logo" />

            <div className={headerStyles.appName}>
                <h1>{props.appname}</h1>
            </div>            
        </div>
    );
}

export default Header;