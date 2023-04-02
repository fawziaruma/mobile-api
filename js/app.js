const loadData = (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayData(data.data))
}
const displayData = mobiles =>{
    const phnContainer = document.getElementById('phn-container')
    mobiles.forEach(mobile =>{
        console.log(mobile);
        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = `
        <img src="${mobile.image}" alt="">
        <h3> name: ${mobile.phone_name}</h3>
        `
        phnContainer.appendChild(creatDiv)
    })

}
loadData()