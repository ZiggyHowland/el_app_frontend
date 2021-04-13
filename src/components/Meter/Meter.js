import React from "react";
import { useParams } from "react-router-dom";
import RestClient from "../RestClient";
import MeterForm from "../Meter/MeterForm";

export default function Meter() {
    let { id } = useParams();
    let [ meter, setMeter ] = React.useState(null); // TODO: Understand this syntax

    React.useEffect(() => {
        RestClient.getMeterById(id)
            .then(meter => setMeter(meter))
            .catch((error) => alert(error));
    }, []) 

    if (meter) {
        return (
            <React.Fragment>
                <MeterDetails {...meter} />
                <UpdateMeterFromMarkup {...meter} />
            </React.Fragment>
        )
    }
    else {
        return<p>OK, that's a problem...</p>
    }

    function MeterDetails(meter) {
        return (
            <div>
                <h1>{`${meter.description}`}</h1>                 
                <div>{JSON.stringify(meter)}</div>
            </div>
        )
    } 

    function UpdateMeterFromMarkup(meter) {
        // DUmmy-function to force a reload ????
	    const [value, setValue] = React.useState(0)

        const handleUpdate = (e) => {
            e.preventDefault();

            let updatedMeter = {
                id: meter.id,
                description: document.getElementById('description').value,                
            }

            RestClient.updateMeterById(updatedMeter.id, updatedMeter)
                      .then( () => {
                          window.alert('Thanks dude!')
                          e.target.reset()
                          //location.meters.push(updatedMeter)
                          setValue(value => value + 1)
                      })
                      .catch( (e) => alert(e))
        }

        return (        
            <MeterForm 
                header="Update description of this meter" 
                pushButton={handleUpdate}
                buttonText="Update meter"    
            />
                
        )
    }
}