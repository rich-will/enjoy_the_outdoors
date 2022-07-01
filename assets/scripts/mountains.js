let mtnCard = document.querySelector("#mtnCard")


mountainsDDL.addEventListener("change", function(event){
   
    let selectedMtn = mountainsArray.filter((mountain) =>{
        return mountain.name === event.target.value
        
    })

    generateMtnCard(selectedMtn[0])
    
    mtnCard.classList.remove("d-none")

    


})

function generateMtnCard(mountain){

    //clear out the tables previous results
    mtnCard.innerHTML = ""
    let card = ""
        card += `   <div class="card" style="width: 80rem;">`
        card += `   <div class="card-body">`
        card += `   <h5 class="card-title">${mountain.name}</h5>`
        card += `   <img src="assets/images/mountains/${mountain.img}" class="card-img">`  
        card += `   <p class="card-text"></p>` 
        card += `   <p class="card-text">${mountain.desc}</p>` 
        card += `   <p class="card-text">Effort: ${mountain.effort}</p>` 
        card += `   <p class="card-text">Coordinates: ${mountain.coords}</p>`      
        card += `   </div>`
        card += `   </div>`
        

        mtnCard.innerHTML += card
    }


