import React from "react";
import { Link, useLocation } from "react-router-dom";
import RestClient from "../RestClient";
import "./Meter.css";


function Meters() {
    // Source: https://reactgo.com/react-get-query-params/
    const search = useLocation().search;
    const locationId = new URLSearchParams(search).get('locationId');
    
    //const { url, path } = useRouteMatch();
    //alert("URL: " + url + "\nPATH: " + path);

    let [meters, setMeters] = React.useState([]);

    React.useEffect( () => {
        (locationId == null ? RestClient.getMeters() : RestClient.getMetersByLocationId(locationId) )
            .then(meters => setMeters(meters));
    }, [])


    const handleDelete = ({id, description}) => (e) => {
        if (window.confirm(`Do you want to delete ${description} (id: ${id})?`)) {
            RestClient.deleteMeterById(id)
                .then( () => {
                    window.alert(`Meter ${description} deleted`)                    
                })
                .catch( (e) => alert(e))
        }        
    }


    return (
        <div>
            <h1>Meters:</h1>            
            {meters.map(
                (meter, i) => 
                <div key={i} className="meter">
                    {meter.description} (id: {meter.id})<br/>
                    <Link to={`meter/${meter.id}`}>
                        Update description    
                    </Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="" onClick={handleDelete(meter)}>
                        Remove meter    
                    </a>
                </div>
            )}

        </div>
    )


}

export default Meters;