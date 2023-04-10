const loadData = (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayData(data.data))
    

}
const displayData = mobiles =>{
    
    const phnContainer = document.getElementById('phn-container')
    mobiles.forEach(mobile =>{
      
        const creatDiv = document.createElement('div')
        creatDiv.classList.add('col')
        creatDiv.innerHTML = `
        <div  class ="card">
        <img src="${mobile.image}"  alt="">
        <div class ="card-body">
        <h3 class ="card-title"> name: ${mobile.phone_name}</h3>
        <button  onClick="loadPhnDetail('${mobile.slug}')" class ="btn btn-primary">show detail</button>
        </div>
        </div>
        `
        phnContainer.appendChild(creatDiv)
        
    })

}

const searchPhn = () =>{
    const searchField = document.getElementById('phn-field')
    const searchText = searchField.value 
    loadData(searchText)
    searchField.value = ''

}
// ...........show detail..........//
const loadPhnDetail = id =>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  displayPhnDetail(data.data))
}


const displayPhnDetail = phn =>{
    console.log(phn);
    const detailContainer = document.getElementById('details-container')
    detailContainer.innerHTML = ''
    const creatDiv = document.createElement('div')
    creatDiv.classList.add('col')
    creatDiv.innerHTML =`
    <div class ="card">
    <div class ="card-body">
    <div class="modal-dialog modal-dialog-scrollable">
    <h3>storage: ${phn.mainFeatures.storage}</h3>
    <h3>display: ${phn.mainFeatures.displaySize}</h3>
    <h3>memory: ${phn.mainFeatures.memory}</h3>
    <h3> sensore: ${phn.mainFeatures.sensors[0]} 
    
    </div>
   </div>
   </div>
    
    `
    detailContainer.appendChild(creatDiv)


}
