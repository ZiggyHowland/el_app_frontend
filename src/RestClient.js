import { getGlobalVariables } from "./environment.js"

class RestClient {
    static baseUrl = getGlobalVariables().rest_base_url;

    static getLocations() {
        const url = `${RestClient.baseUrl}/v1/locations`;
        return this.doGet_v2(url);
    }

    static getLocationById(id) {
        const url = `${RestClient.baseUrl}/v1/locations/${id}`;
        return this.doGet_v2(url);
    }



    static getMeters() {
        const url = `${RestClient.baseUrl}/v1/meters`;
        return this.doGet_v2(url);
    }

    static getMeterById(id) {
        const url = `${RestClient.baseUrl}/v1/meters/${id}`;
        return this.doGet_v2(url);
    }

    static getMetersByLocationId(locationId) {
        const url = `${RestClient.baseUrl}/v1/locations/${locationId}/meters`;
        return this.doGet_v2(url);
    }

    static addMeterAtLocationId(locationId, newMeter) {
        const url = `${RestClient.baseUrl}/v1/locations/${locationId}/meters`;
        return this.doPost(url, newMeter);
    }

    static updateMeterById(id, meterToUpdate) {
        const url = `${RestClient.baseUrl}/v1/meters/${id}`;
        return this.doPut(url, meterToUpdate);
    }

    static deleteMeterById(id) {
        const url = `${RestClient.baseUrl}/v1/meters/${id}`;
        return this.doDelete(url);
    }

    


    static async doDelete(url) {
        const requestOptions = {
            method: 'DELETE',            
        };   
        const response = await fetch(url, requestOptions);                    
        return response;
    }


    static async doPut(url, objectToUpdate) {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(objectToUpdate),
            //mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        };        
        const response = await fetch(url, requestOptions);                    
        return response;
    }


    static async doPost(url, objectToInsert) {
        const response = await fetch(
            url, 
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(objectToInsert),
                // mode: 'cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }                
        );
        return await response.json();
    }


    static async doGet_v2(url) {
        const response = await fetch(url);
        return await response.json();
    }

    
    static doGet_v1(url) {
        const promise1 = fetch(url);
        const promise2 = promise1.then( response => {                 
            return response.json();
        });
        return promise2;
    }
    
}



export default RestClient;
