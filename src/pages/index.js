import React from "react";
import { getGlobalVariables } from './environment.js';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';


const appStyles1 = {
    backgroundColor: "black"
}

const appStyles =  {
    ...appStyles1,
    textAlign: "center"
}



// markup
const IndexPage = () => {
  return (
    <div style={appStyles}>      
      <Header appname={getGlobalVariables().appname} />
      {/* <Menu /> */}
      <Home />      
      <Footer />
    </div>
  )
}


export default  IndexPage
