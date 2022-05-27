/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT ="cars.json";
fetch(ENDPOINT)
.then(response=>response.json())
.then(data=>{
   
 data.map(x => {
     let korta=document.createElement("div")
     korta.classList.add("card")
    korta.innerHTML=
         `
         <h3><span>${x.brand}:</span></h3>
         <p>${x.models}</p>
        `
 output.append(korta)
    
 });


})

  