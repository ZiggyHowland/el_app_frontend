import React from "react";
import { Link } from "gatsby";
import RestClient from "../../RestClient";
import "./Meter.module.css";
import { useQueryParam } from "use-query-params";
import Layout from "../../components/Layout/Layout";

function Meters() {
    // Source: https://www.gatsbyjs.com/plugins/gatsby-plugin-use-query-params/
    const [ locationId, setLocationId ] = useQueryParam("locationId");

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
        <Layout>
            <h1>Meters:</h1>            
            {meters.map(
                (meter, i) => 
                <div key={i} className="meter">
                    {meter.description} (id: {meter.id})<br/>
                    <Link to={`/meters/${meter.id}`}>
                        Update description    
                    </Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="" onClick={handleDelete(meter)}>
                        Remove meter    
                    </a>
                </div>
            )}

        </Layout>
    )


}

export default Meters;