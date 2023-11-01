const loadcountries =() =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displaycountries(data) );
}
const displaycountries = countries =>{
console.log(countries[0])
const countriesHTML =countries.map(country =>getCountryHTML(country));
// console.log(countriesHTML[0]);
const container = document.getElementById('countries');
container.innerHTML = countriesHTML.join('')

}
const getCountryHTML = ({name,flags,area,borders,capital}) => {

    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area:${area}</p>
    <p>Borders:${borders}</p>
    <p>Capital:${capital}</p>
    <img src="${flags.png}">
    </div>
    `
}
// orginal Method//
// const getCountryHTML = country => {
    
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `
// }
//destructuring method//
// const getCountryHTML = country => {
//     //destructuring option
//     const {name,flags}=country
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
//     </div>
//     `
// }
loadcountries();