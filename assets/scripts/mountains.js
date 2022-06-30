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
        card += `   <div class="card" style="width: 20rem;">`
        card += `   <div class="card-body">`
        card += `   <h5 class="card-title">${mountain.name}</h5>`
        card += `   <p class="card-text">${mountain.desc}</p>` 
        card += `   <img src="assets/images/mountains/${mountain.img}">`       
        card += `   </div>`
        card += `   </div>`
        

        mtnCard.innerHTML += card
    }


