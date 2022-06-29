//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

//getting the dropdown list into the JS file for us to work with
let searchTypeDDL = document.querySelector("#searchTypeDDL");

//get the locations dropdown so we can work with it
let locationsDDL = document.querySelector("#locations");

//get the locations dropdown so we can work with it
let typesDDL = document.querySelector("#types");

let searchResults = document.querySelector("#searchResults")
let searchResultsBody = document.querySelector("#searchResults tbody")
//
    //check which search type
    //if search type is location then show locations dropdown
    //if search type is type then show types dropdown
    //hide all the dropdowns and then check which is supposed to show below

searchTypeDDL.addEventListener("change", function(event){
    
    locationsDDL.classList.add("d-none")
    typesDDL.classList.add("d-none")

    if(event.target.value === "location"){
        generateLocationsDDLOptions();
        locationsDDL.classList.remove("d-none")
        typesDDL.classList.add("d-none")
    }

    if(event.target.value === "type"){
        generateTypesDDLOptions()
        typesDDL.classList.remove("d-none")
        locationsDDL.classList.add("d-none")
    }

})

locationsDDL.addEventListener("change", function(event){
    let choice = event.target.value
    selectedlocation(choice)
    
})

typesDDL.addEventListener("change", function(event){
    
    let choice = ""
    choice = event.target.value
    selectedtype(choice)
    
    
})
//functions to be called during search type code blocks above

function selectedlocation(location){
    console.log(location)
    let filteredparks = nationalParksArray.filter(function(nationalPark){
        if(nationalPark.State===location){return true}
        
        return false
        // return nationalPark.state === location

    }) 
    console.log(filteredparks)

    generateTableRows(filteredparks)

    searchResults.classList.remove("d-none")
}

function selectedtype(type){
    console.log("this is the type-" + type)
    
    let filteredparks = nationalParksArray.filter(function(nationalPark){
        // if(nationalPark.LocationName===type){return true}
        let npname = nationalPark.LocationName
        if (npname.toLowerCase().indexOf(type.toLowerCase()) >= 0){return true}

        return false
    })
    console.log(type)
    console.log("these are the filtered parks -" + filteredparks)

    generateTableRows(filteredparks)

    searchResults.classList.remove("d-none")
}

function generateTableRows(someArrayOfData){

    

    someArrayOfData.forEach((park)=>{
        let row = ""
        row += `<tr>`
        row += `<td>${park.LocationName}</td>`
        row += `<td>${park.State}</td>`
        row += `</tr>`

        searchResultsBody.innerHTML += row
        
    })
}


function generateLocationsDDLOptions(){

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    locationsArray.forEach((location) => {
        locationsDDL.innerHTML += `<option value="${location}">${location}</option>`
    })

}

function generateTypesDDLOptions(){

    locationsDDL.innerHTML = `<option value="">Choose A Location</option>`

    parkTypesArray.forEach((partkType) => {
        typesDDL.innerHTML += `<option value="${partkType}">${partkType}</option>`
    })

}
 





//==================all below is broken and yucky =================================================
//this file has locationsArray, nationalParksArray, and parkTypesArray available to it because 
//we included load_national_parks_data.js above it in the html file 

// let allParksButton = document.querySelector("#allParksButton")
// let theSampleButton = document.querySelector("#theDemoButton")
// let locationsUL = document.querySelector("#locations")
// let parkTypeUL = document.querySelector("#parkTypes")
// let parksUl = document.querySelector("#parks")












// theSampleButton.addEventListener("click", function(event){
//     console.log(locationsArray)
//     console.log(nationalParksArray)
//     console.log(parkTypesArray)


//     locationsArray.forEach((location) => {
//         theSampleUL.innerHTML += `<li>${location}</li>`
//     })

//     parkTypesArray.forEach((parkType) => {
//         parkTypeUL.innerHTML += `<li>${parkType}</li>`
//     })

//     nationalParksArray.forEach((park) => {
//         parksUl.innerHTML += `<li>${park.LocationName}</li>`
//     })

//     theSampleUL.classList.remove("d-none")

//     parkTypeUL.classList.remove("d-none")

//     parksUl.classList.remove("d-none")

    

// })

    

// allParksButton.addEventListener("click", function(event){

//     theSampleUL.classList.remove("d-none")

//     parkTypeUL.classList.remove("d-none")

//     parksUl.classList.remove("d-none")
// // })

//     nationalParksArray.forEach((park) => {
//         let div = document.querySelector('div')
//        div.innerHTML = div.innerHTML + `
//         <div class="row">
//             <div class="col-sm-6">
//                 <div class="card">
//                     <div class="card-body">
//                         <div class="card" style="width: 18rem;">
//                             <div class="card-header">
//                                 ${park.LocationName}
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