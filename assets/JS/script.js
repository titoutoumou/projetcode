// fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/instruments-musique-monde.json")
// .then(response => response.json())
// .then(data =>{
//     const comDom = document.querySelector(".com")
//     console.log(comDom);
//     const p = document.createElement("p")
//    p.innerText = (data.entreprise.produits.temoignages[0])
//     comDom.appendChild(p)
//     console.log(comDom);
// })    


const title = document.querySelector("h1")
const description = document.querySelector("#description")
const articles = document.querySelector(".articles")

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/instruments-musique-monde.json')
        .then(response => response.json())
        .then(data => {
            const temoignages = data.entreprise.temoignages
            temoignages.forEach(element => {
                    console.log(element);
                    console.log(element.prenom)
            });
        })
