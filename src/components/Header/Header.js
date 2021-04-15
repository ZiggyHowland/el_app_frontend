import React from "react";
import logo from './logo.png';
import * as headerStyles from './Header.module.css';
import { useStaticQuery, graphql } from "gatsby"


export default function Header() {
    const data = useStaticQuery(
        graphql`
          query ThisIsIt {
            site {
              siteMetadata {
                appHeader
              }
            }
          }
        `
    );

    return (
        <div className={headerStyles.appHeader}>            
            <img src={logo} className={headerStyles.appLogo} alt="logo" />

            <div className={headerStyles.appName}>
                <h1>{data.site.siteMetadata.appHeader}</h1>
            </div>            
        </div>
    );
}


