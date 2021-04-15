import React from "react";
import { useParams } from "react-router-dom";
import RestClient from "../../RestClient";
import MeterForm from "../../components/Meter/MeterForm";


export default function Location(props) {
    alert(JSON.stringify(props));
  
    //let id = URLSearchParams.get(id);
    var id = 1;
    let [ location, setLocation ] = React.useState(null);

    // https://reactjs.org/docs/hooks-effect.html
    // (The function the component need to run after rendering)
    React.useEffect(() => {
        RestClient.getLocationById(id)
            .then(location => setLocation(location))
            .catch((error) => alert(error));
    }, []) // TODO: Removing the [] makes the code enter an infite loop. WHY?

    if (location) {
        return (
            <React.Fragment>
                <LocationDetails {...location} />
                <AddMeterFromMarkup {...location} />
            </React.Fragment>
        )
    }
    else {
        return<p>OK, that's a problem...</p>
    }

    function LocationDetails(location) {
        const houseNumber = location.houseSection ? location.houseNumber + location.houseSection : location.houseNumber;

        return (
            <div>
                <h1>{`${location.street} ${houseNumber}`}</h1> 
                <div>(Placeholder for Google Maps view)</div>
                <div>{JSON.stringify(location)}</div>
            </div>
        )
    } 

    // This is the "Add Review" (Button) on click 
    function AddMeterFromMarkup(location) {
        // TODO: Dummy-function to force a reload ????
	    const [value, setValue] = React.useState(0)

        const handleSubmit = (e) => {
            // TODO: Explained, but not understood... 
            e.preventDefault();

            let meter = {
                description: document.getElementById('description').value,                
            }

            // Send object to restClient
            RestClient.addMeterAtLocationId(location.id, meter)
                      .then( () => {
                          window.alert('Thanks dude!')
                          e.target.reset()
                          location.meters.push(meter)
                          setValue(value => value + 1)
                      })
                      .catch( (e) => alert(e))
        }

        return (        
            <MeterForm 
                header="Add new meter at this location" 
                pushButton={handleSubmit} 
                buttonText="Add meter"
            />
                
        )
    }
}