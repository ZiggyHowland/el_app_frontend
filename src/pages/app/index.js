import React from "react";
import { Router } from "@reach/router"
import Location from '../locations/location';
import Layout from '../../components/Layout/Layout';


const App = () => {
    return (
        <Layout>      
            <Router basepath="/app">                                                      
                <Location path="location/:locationId" component={Location} />
            </Router>
        </Layout>
    )
}

export default App;