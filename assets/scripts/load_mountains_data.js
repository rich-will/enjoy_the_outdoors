"use strict"

let mountainsArray = []
let mountainsDDL = document.querySelector("#mountainsDDL")

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountainsData) => {
        mountainsArray = mountainsData.mountains;

        //here we make 
        generateMountainsDDL()

        mountainsDDL.classList.remove("d-none")

        // console.log(mountainsArray.map(function(mountain){
        //     return mountain.name
        // }))
    })
}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

function generateMountainsDDL(){
    mountainsDDL.innerHTML = `<option value="">Choose A Mountain</option>`
    mountainsArray.forEach((mountain) => {
        mountainsDDL.innerHTML += `<option value="${mountain.name}">${mountain.name}</option>`
    })
    console.log(mountain.name + "json mountain.name")
}