import React from "react";
import Layout from '../components/Layout/Layout';
import ThunderImage from '../images/lightning.jpg';
// import { graphql } from 'gatsby';

const appStyles1 = {
    backgroundColor: "black"
}

const appStyles =  {
    ...appStyles1,
    textAlign: "center"
}

const imgStyles = {
    width: "100%"
}


// markup
//const IndexPage = ({data}) => {
  const IndexPage = () => {
  return (
    // <Layout data={data}>      
    <Layout>
      <div style={appStyles}>
        <img style={imgStyles} src={ThunderImage} alt='Thunder storms' />
      </div>
    </Layout>
  )
}

export default IndexPage;


// export const query = graphql`    
//     query HeaderQuery {
//         site {
//             siteMetadata {
//                 appName
//             }
//         }
//     }    
// `