import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import RestClient from "../../RestClient";
import * as meterStyles from "./Meter.module.css";
import { useQueryParam } from "use-query-params";
import Layout from "../../components/Layout/Layout";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Meters() {
    // Source: https://www.gatsbyjs.com/plugins/gatsby-plugin-use-query-params/
    const [ locationId, setLocationId ] = useQueryParam("locationId");
    const [meters, setMeters] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");


    useEffect( () => {
        loadMeters();
    }, [])


    const loadMeters = () => {
        (locationId == null ? RestClient.getMeters() : RestClient.getMetersByLocationId(locationId) )
            .then(meters => setMeters(meters))
            .catch(err => alert(err));
    }


    const deleteMeter = (id, description) => {   
        setAlertMessage(`Meter ${description} with id ${id} deleted`);             
        RestClient.deleteMeterById(id)
            .then( () => {                              
                loadMeters();       
                setShowAlert(true);  
            })
            .catch( (e) => alert(e))            
    }


    const DeleteConfirmation = () => {        
        const [secondsLeft, setSecondsLeft] = useState(3);
        useEffect(() => {  
            if (showAlert && secondsLeft > 0) {
                var time = setTimeout( () => {
                    console.log("Seconds left: " + secondsLeft);
                    setSecondsLeft(secondsLeft-1);
                }, 1000)
            }
            else {
                clearTimeout(time);
                if (showAlert) {
                    setShowAlert(false);
                }
            }
        }, [secondsLeft])
        // Last parameter explained: https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect 



        if (showAlert) {
            return (
                <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible transition >
                    {`${alertMessage} (This message will close after ${secondsLeft} seconds)`}
                </Alert>
            );
        }
        else {
            return "";
        }
    }


    return (
        <Layout>               
            <h1>Meters:</h1>     
            <DeleteConfirmation />


            {meters.map(
                (meter, i) => 
                <div key={i} className={meterStyles.meter}>
                    {meter.description} (id: {meter.id})<br/>
                    <Link to={`/meters/${meter.id}`}>
                        Update description    
                    </Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <DeleteModal linkText="Delete meter" id={meter.id} description={meter.description} deleteAction={deleteMeter}  />                      
                </div>
            )}

        </Layout>
    )


}





function DeleteModal ({linkText, id, description, deleteAction })  {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);        
    const handleShow = () => setShow(true);    

    const doDelete = () => {
        deleteAction(id, description);        
        handleClose();
    }

    return (
        <>
            <Button variant="link" onClick={handleShow}>{linkText}</Button>        

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {`Do you want to delete ${description} (id: ${id})?`}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => doDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Meters;