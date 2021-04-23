import React from "react";
import Layout from '../components/Layout/Layout';
import Image from 'react-bootstrap/Image'
import ThunderImage from '../images/lightning.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const appStyles1 = {
    backgroundColor: "black"
}

const appStyles =  {
    ...appStyles1,    
    marginTop: 10,
    marginBottom: 10,
}

// markup
  const IndexPage = () => {
  return (
    <Layout>
      <div style={appStyles}>
        <Image src={ThunderImage} rounded fluid />
      </div>
    </Layout>
  )
}

export default IndexPage;

