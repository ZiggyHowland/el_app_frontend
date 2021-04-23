import React from "react";
import { Link } from "gatsby";
import RestClient from "../../RestClient";
import * as locationStyles from './Location.module.css';
import Layout from '../../components/Layout/Layout';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function Locations() {
    let [locations, setLocations] = React.useState([]);

    React.useEffect( () => {
        RestClient.getLocations()
            .then(locations => setLocations(locations));
    }, [])

    const CreateLocationCard = ({location}) => {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={location.id}>
                    {`${location.street} ${location.houseNumber}, (${location.postCode})`}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={location.id}>
                <Card.Body>               
                    <Card.Link href={`/locations/${location.id}`}>View location</Card.Link>
                    <Card.Link href={`/meters?locationId=${location.id}`}>View meters</Card.Link>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }

    return (
        <Layout>
            <h1>Locations (homes):</h1>      
            <Accordion defaultActiveKey="0">
                {locations.map(
                    (location, i) => 
                    <CreateLocationCard key={i} location={location} />
                )}
            </Accordion>        
        </Layout>
    )

    


}

export default Locations;