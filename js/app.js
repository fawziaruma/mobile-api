const loadData = (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=samsung`
    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data))
}
loadData()