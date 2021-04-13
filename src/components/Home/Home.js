import React from "react";
import * as homeStyling from './Home.module.css';
import splash from './lightning.jpg';

function Home() {
    return (
        <div>
            <img src={splash} alt='Thunder storms' />
        </div>  
    );
}

export default Home;