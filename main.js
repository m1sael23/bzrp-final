const personajes = [
    {
        name: "1. QUEVEDO",
        skills: [ " QUEVEDO || BZRP Music Sessions #52", ],
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VQH5F6UIEJCG7JLXIMDLEOUE6M.jpg"
    },
    {
        name: "2. PAULO LONDRA",
        skills: ["Paulo Londra || Bzrp Music Sessions, Vol. 23",],
        img: "https://cnnespanol.cnn.com/wp-content/uploads/2022/04/279020362_578315190319597_5612432306644628192_n.jpeg?quality=100&strip=info"
    },
    {
        name: "3. DUKI",
        skills: ["DUKI || BZRP Music Sessions #50",],
        img: "https://imagenes.elpais.com/resizer/L5Pf9jMFmq1Z9yTeAQqDAudSey8=/414x0/filters:focal(945x485:955x495)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LFM6SIR7EREEDPJ7QYZKP4EQ7A.jpg"
    },
    {
        name: "4. C.R.O",
        skills: ["C.R.O || BZRP Music Sessions #29", ],
        img:"https://pbs.twimg.com/media/FP6kdjuXIAMPSsc.jpg"

    },
    {
        name: "5. KHEA",
        skills: ["KHEA || BZRP Music Sessions #34",],
        img:"https://d34ugyblrhxy34.cloudfront.net/wp-content/uploads/2020/09/05231428/BIZA-KHEA-1-900x600.jpg"
    },
    {
        name: "6. DON PATRICIO",
        skills: ["DON PATRICIO || BZRP Music Sessions #25",],
        img:"https://www.nostromomagazine.es/wp-content/uploads/2020/04/bizarrap-don-patricio.jpg"
    },
    {
        name:"7. DANI RIBBA",
        skills: ["DANI || BZRP Music Sessions #24",],
        img:"https://i.pinimg.com/736x/9b/e1/9b/9be19b66f3ba6cf2b8d7db775c2633e9.jpg"
    },
    {
        name: "8. ELADIO",
        skills: ["Eladio Carrión || BZRP Music Sessions #40", ],
        img:"https://img2.rtve.es/imagenes/bizarrap-vuelve-reventar-youtube-esta-vez-junto-eladio-carrion/1623313449630.jpg"
    },
    {
        name: "9. AZAN",
        skills: ["ASAN || BZRP Music Sessions #35"],
        img:"https://pbs.twimg.com/media/Emk17vOXEAQDkEI.jpg:large"
    },
    {
        name: "10.MORAD",
        skills: ["MORAD || BZRP Music Sessions #47",],
        img:"https://img2.rtve.es/i/?w=1600&i=1639038230894.jpg"
    }

]
//lista de personajes con sus caracteristicas e imagenes, todo en un objeto dentro de un array para iterar



const container = document.getElementById("container"); //el div de html en el que vamos a crear las cartas 


const template = document.createElement("template");   //creamos elementos html con createElement("template")
template.innerHTML = `
<div class="card">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
`;

//iterar por cada uno de los personajes que existen en el objeto
personajes.forEach((personaje) => {

    //eston es para clonar cada una de las cartas
    const card = template.content.cloneNode(true);
    card.querySelector(".card").classList.add("col-md-4");

    //reenderizamos con el nombre 
    const name = card.querySelector(".card-title");
    name.textContent = personaje.name;

    //imagen 
    const img = card.querySelector(".card-img-top");
    img.src = personaje.img;

    //sus habilidades 
    const skills = card.querySelector(".card-text");
    skills.textContent = personaje.skills;

    //meter estos datos en el contenedor 
    container.appendChild(card);

});





let lista = [1,2,3,4,5,6,7,8,9,10]   


for(let i=0; i<= lista.length; i++){
    console.log(i)

}