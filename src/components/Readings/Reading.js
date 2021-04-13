import { getGlobalVariables } from '../environment.js';
import './Reading.css';

const data = [ 
    { 
        street: "Titlestadvegen", houseNumber: "219", meters: 
        [
            { 
                description: "Main", readings: 
                [
                    // { date: "2020-10-01", meterValue: 85577 },
                    // { date: "2020-11-01", meterValue: 88480 },
                    // { date: "2020-12-01", meterValue: 91432 },
                    // { date: "2021-01-01", meterValue: 94900 },
                    // { date: "2021-02-01", meterValue: 99587 },
                    // { date: "2021-03-01", meterValue: 103842 },
                ],
            },
            {
                description: "Leilighet", readings: 
                [
                    // { date: "2020-10-03", meterValue: 108931 },
                    // { date: "2020-11-01", meterValue: 109332 },
                    // { date: "2020-11-30", meterValue: 109654 },
                    // { date: "2021-01-01", meterValue: 110035 },
                    // { date: "2021-02-01", meterValue: 110477 },
                    // { date: "2021-03-01", meterValue: 111064 },
                ],
            },
        ],
    },
];

const transformedData = [
    {
        location: "Norheimsveien 19",
        meters: [],
        dates: [],
    },
    {
        location: "Titlestadvegen 219", 
        meters:
        [
            { index: 0, description: "Main" },
            { index: 1, description: "Appartment" },
        ],
        dates: 
        [
            { 
                year: 2020, 
                month: 10, 
                day: 1, 
                meters: [
                    { description: "Main", value: 85577 },
                ],
            },
            { 
                year: 2020, 
                month: 10, 
                day: 3, 
                meters: [
                    { description: "Appartment", value: 108931},
                ],
            },
            { 
                year: 2020, 
                month: 11, 
                day: 1, 
                meters: [                    
                    { description: "Main", value: 88480},
                    { description: "Appartment", value: 109332},
                ],
            },
            { 
                year: 2020, 
                month: 11, 
                day: 30, 
                meters: [                    
                    { description: "Appartment", value: 109654},
                ],
            },
            { 
                year: 2020, 
                month: 12, 
                day: 1, 
                meters: [                    
                    { description: "Main", value: 91432},
                ],
            },
            { 
                year: 2021, 
                month: 1, 
                day: 1, 
                meters: [                    
                    { description: "Main", value: 94900},
                    { description: "Appartment", value: 110035},
                ],
            },
            { 
                year: 2021, 
                month: 2, 
                day: 1, 
                meters: [                                        
                    { description: "Appartment", value: 110477},
                    { description: "Main", value: 99587},
                ],
            },
            { 
                year: 2021, 
                month: 3, 
                day: 1, 
                meters: [                    
                    { description: "Main", value: 103842},
                    { description: "Appartment", value: 111064},
                ],
            },
        ]
    }
]

var headerArray;

function setHeaderArray(meters) {
    headerArray = [];
    if (meters.length > 0 ) {     
        meters.forEach( function(meter) {
            headerArray.push(meter.description);
        });     
        
        // for (var m of meters) {
        //     headerArray.push(m.description);
        // }
    }
}

function syncColumnsWithTableHeader(meters) {
    var original = Array.from(meters);
    var result = [];
    for (var i = 0; i < headerArray.length; i++) {
        var colSuccess = false
        for (var j = 0; j < original.length; j++) {
            if (original[j].description === headerArray[i]) {
                result.push(original[j]);
                original.splice(j, 1);            
                colSuccess = true;
                break;
            }
        }
        if (!colSuccess) {
            result.push({
                description: `${headerArray[i]}`,
                value: ""
            });
        }
    }
    return result;
}


function ReadingDate ({year, month, day, meters}) {
    var date = new Date(year, month, day).toLocaleDateString(getGlobalVariables().date_locale, getGlobalVariables().date_options);
    return (
        <div className="ReadingDate">
            <div className="Date">{date}</div>
            {meters.map(
                (meter, i) =>
                    <div key={i}>
                        <span>{meters.description}</span>    
                        <span>{meter.value}</span>
                    </div>
            )}
        </div>
    )
}


const LocationReadings = ({location, meters, dates}) =>
    <fieldset>
        <legend>{location} readings:</legend>                 
        {dates.map(
            (date, i) => <ReadingDate key={i} {...date} />                                            
        )}                    
               
    </fieldset>
    


function AllReadings() {
    return (
        <div className="AllReadings">     
            {transformedData.map(
                (location, i) =>
                    <LocationReadings key={i} {...location} />            
            )}

        </div>
    ) 
}


export default AllReadings;