//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

let allParksButton = document.querySelector("#allParksButton")
let theSampleButton = document.querySelector("#theDemoButton")
let theSampleUL = document.querySelector("#locations")
let parkTypeUL = document.querySelector("#parkTypes")
let parksUl = document.querySelector("#parks")
// let parksList = document.querySelector("#parks")






// theSampleButton.addEventListener("click", function(event){
//     console.log(locationsArray)
//     console.log(nationalParksArray)
//     console.log(parkTypesArray)


    // locationsArray.forEach((location) => {
    //     theSampleUL.innerHTML += `<li>${location}</li>`
    // })

    // parkTypesArray.forEach((parkType) => {
    //     parkTypeUL.innerHTML += `<li>${parkType}</li>`
    // })

    // nationalParksArray.forEach((park) => {
    //     parksUl.innerHTML += `<li>${park.LocationName}</li>`
    // })

//     theSampleUL.classList.remove("d-none")

//     parkTypeUL.classList.remove("d-none")

//     parksUl.classList.remove("d-none")

    

// })

    

allParksButton.addEventListener("click", function(event){

    theSampleUL.classList.remove("d-none")

    parkTypeUL.classList.remove("d-none")

    parksUl.classList.remove("d-none")
// })

    nationalParksArray.forEach((park) => {
        let div = document.querySelector('div')
       div.innerHTML = div.innerHTML + `
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                ${park.LocationName}
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">"Address: "${park.Address}</li>
                                <li class="list-group-item">"City: "${park.City}</li>
                                <li class="list-group-item">"State "${park.State}</li>
                                <li class="list-group-item">"ZipCode "${park.ZipCode}</li>
                                <li class="list-group-item">"Phone "${park.Phone}</li>
                                <li class="list-group-item">"Fax "${park.Fax}</li>
                                <li class="list-group-item">"Latitude "${park.Latitude}</li>
                                <li class="list-group-item">"Longitude "${park.Longitude}</li>
                                <li class="list-group-item">"Location "${park.Location}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `})
    })


    // parksList.addEventListener("click", function(event){
    //     nationalParksArray.forEach((park) => {
    //         let div = document.querySelector('div')
    //         div.innerHTML = div.innerHTML + `
    //         <div class="row">
    //             <div class="col-sm-6">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <div class="card" style="width: 18rem;">
    //                             <div class="card-header">
    //                                 "Park: "${park.LocationName}
    //                             </div>
    //                             <ul class="list-group list-group-flush">
    //                                 <li class="list-group-item">"Address: "${park.Address}</li>
    //                                 <li class="list-group-item">"City: "${park.City}</li>
    //                                 <li class="list-group-item">"State "${park.State}</li>
    //                                 <li class="list-group-item">"ZipCode "${park.ZipCode}</li>
    //                                 <li class="list-group-item">"Phone "${park.Phone}</li>
    //                                 <li class="list-group-item">"Fax "${park.Fax}</li>
    //                                 <li class="list-group-item">"Latitude "${park.Latitude}</li>
    //                                 <li class="list-group-item">"Longitude "${park.Longitude}</li>
    //                                 <li class="list-group-item">"Location "${park.Location}</li>
    //                             </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    
    //     `})
    //     })



 

//reference nationalparks.json/
// "parks" : [
//     {
//       "LocationID": "ABLI",
//       "LocationName": "Abraham Lincoln Birthplace National Historical Park",
//       "Address": "2995 Lincoln Farm Road",
//       "City": "Hodgenville",
//       "State": "Kentucky",
//       "ZipCode": 42748,
//       "Phone": "(270) 358-3137",
//       "Fax": "(270) 358-3874",
//       "Latitude": 37.535671,
//       "Longitude": -85.7340637,
//       "Location":{"coordinates": [-85.7340637,37.535671],"type":"Point"}
//     },