const loadPhone = (searchtext, dataLimit)=>{
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchtext}`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayPhone(data.data , dataLimit))
} 


const displayPhone = (phone, dataLimit) =>{

    const phnContainer = document.getElementById('mobile-container')
    phnContainer.textContent = '';
    // ......display ten phone only.......//
    const showAll = document.getElementById('show-all')
   
    if(dataLimit && phone.length > 10){
        phone = phone.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else{showAll.classList.add('d-none')}

    //  display no phone  found

    const noPhone = document.getElementById('no-found-message')
    if(phone.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }


    // .......display all phone..........//
    phone.forEach(mobile => {

        const phoneDiv  = document.createElement('div');
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        
        <div class="card p-4 ">
  <img src="${mobile.image}" class="card-img-top w-25 " alt="...">
  <div class="card-body">
    <h5 class="card-title">${mobile.phone_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button onClick="loadPhoneDetail('${mobile.slug}')" class="btn btn-primary" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal"  >Show details</button>
  </div>
</div>
        `;
        phnContainer.appendChild(phoneDiv)
    } )
    // stope  spinner loader
    showSpaner(false);
}

const processSearch = (dataLimt) =>{
    // 
    showSpaner(true);

    const searchValue = document.getElementById('search-field');
    searchtext = ( searchValue.value ).toLowerCase();

    loadPhone(searchtext , dataLimt )
}

//  handle  search button click

document.getElementById('search-btn').addEventListener('click' , function(){
    processSearch(10)
} )
// .....spinner..........//
const  showSpaner =  isLoading =>{
    const  loadSection  =  document.getElementById('spinner');
    if(isLoading){
        loadSection.classList.remove('d-none') 
    }
    else{
        loadSection.classList.add('d-none')        
    }
}

// show  all data 

document.getElementById('btn-all').addEventListener('click', function(){
    processSearch()
})

const loadPhoneDetail = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPhoneDetails(data.data))

}

const  displayPhoneDetails = phone =>{
    console.log(phone);
    const moadlTitle = document.getElementById('exampleModalLabel');
    moadlTitle.innerText = phone.name;

    const  phoneDetails = document.getElementById('phone-details')

    // console.log(phone.mainFeatures.sensors[0]);

    phoneDetails.innerHTML = `
     <p> Relese Date :  ${phone.releaseDate ? phone.releaseDate : ' No Relase Date Fond '  }  </p>
     <p> storage :  ${phone.mainFeatures.storage }  </p>
     <p> other :  ${phone.others.Bluetooth }  </p>
    `
    

}

// loadPhone('oppo')