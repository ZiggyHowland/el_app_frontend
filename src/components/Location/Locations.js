import React from "react";
import { Link } from "react-router-dom";
import RestClient from "../RestClient";
import './Location.css';

function Locations() {
    let [locations, setLocations] = React.useState([]);

    React.useEffect( () => {
        RestClient.getLocations()
            //.then(locations => console.log(`All locations: ${JSON.stringify(locations)}`));
            .then(locations => setLocations(locations));
    }, [])

    return (
        <div>
            <h1>Locations (homes):</h1>            
            {locations.map(
                (location, i) => 
                <div key={i}  className="location">
                    {`${location.street} ${location.houseNumber}`}<br/>
                    {location.postCode}
                    <br/>
                    <Link to={`location/${location.id}`}>
                        View location    
                    </Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <Link to={`meters?locationId=${location.id}`}>
                        View meters
                    </Link>


                </div>
            )}

        </div>
    )


}

export default Locations;