import React from "react";
import RestClient from "../../RestClient";
import MeterForm from "../../components/Meter/MeterForm";
import Layout from "../../components/Layout/Layout";

export default function Meter(props) {
    var id = props.params.meterId;
    let [ meter, setMeter ] = React.useState(null);

    React.useEffect(() => {
        RestClient.getMeterById(id)
            .then(meter => setMeter(meter))
            .catch((error) => alert(error));
    }, []) 

    if (meter) {
        return (
            <Layout>
                <MeterDetails {...meter} />
                <UpdateMeterFromMarkup {...meter} />
            </Layout>
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