import React from "react";
import { Link } from "gatsby";
import RestClient from "../../RestClient";
import * as locationStyles from './Location.module.css';
import Layout from '../../components/Layout/Layout';


function Locations() {
    let [locations, setLocations] = React.useState([]);

    React.useEffect( () => {
        RestClient.getLocations()
            .then(locations => setLocations(locations));
    }, [])

    return (
        <Layout>
            <h1>Locations (homes):</h1>            
            {locations.map(
                (location, i) => 
                <div key={i}  className={locationStyles.locationDiv}>
                    {`${location.street} ${location.houseNumber}`}<br/>
                    {location.postCode}
                    <br/>
                    <Link to={`/locations/${location.id}`}>
                        View location    
                    </Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to={`/meters?locationId=${location.id}`}>
                        View meters
                    </Link>


                </div>
            )}

        </Layout>
    )


}

export default Locations;