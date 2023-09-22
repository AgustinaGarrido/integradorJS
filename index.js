const productos= [
    {title:"Termo Classic rosa",
    price:"precio: $200",
    img:"./img/imgstanley/termoRosa.jpeg",
    descripcion:"Termo classic Rosa de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"
    },
    {title:"Termo Verde Oliva",
    price:"precio: $200",
    img:"./img/imgstanley/termoVerde.jpeg",
    descripcion:"Termo Classic Verde de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"
    },
    {title:"Mate Azul",
    price:"precio: $200",
    img:"./img/imgstanley/mateAzul.jpeg",
    descripcion:"Mate Azul de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Mate Rojo",
    price:"precio: $200",
    img:"./img/imgstanley/mateRojo.jpeg",
    descripcion:"Mate Rojo de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Mate Verde Oliva",
    price:"precio: $200",
    img:"./img/imgstanley/mateVerde.jpeg",
    descripcion:"Mate Verde Oliva de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Fucsia",
    price:"precio: $200",
    img:"./img/imgstanley/vasoTermicoFucsia.jpeg",
    descripcion:"Vaso Termico The Quencher Fucsia de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Beige",
    price:"precio: $200",
    img:"./img/imgstanley/vasoTermicoBeige.jpeg",
    descripcion:"Vaso Termico The Quencher Beige de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    {title:"Vaso Termico Amarillo",
    price:"precio: $200",
    img:"./img/imgstanley/vasoTermicoAmarillo.jpeg",
    descripcion:"Vaso Termico The Quencher Amarillo de acero inoxidable, mantiene la bebida con la temperatura ideal, capacidad de 236 ml."
    },
    
]
//carrito
const carrito = [];

const listaCarrito = document.getElementById("lista-carrito")

function agregarAlCarrito(producto){
    const nuevoItemCarrito = document.createElement("li")
    nuevoItemCarrito.innerHTML = `
    <img class="img-cart"src="${producto.img}" alt="${producto.title}">
    <span>${producto.title}</span>
    <span>${producto.price} USD</span>
  `;
  listaCarrito.appendChild(nuevoItemCarrito)
}

//boton cerrar modal

const botonCerrarModal = document.getElementById("cerrar-modal");

botonCerrarModal.addEventListener("click", function () {
  modalCarrito.style.display = "none"; // Cierra el modal al hacer clic en "X"
});


//modal logica

function actualizarModalCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const modalContenido = document.querySelector(".modal-contenido");
  
    // Clonar la lista del carrito y agregarla al modal
    const listaClonada = listaCarrito.cloneNode(true);
    modalContenido.innerHTML = ""; // Limpia el contenido anterior del modal
    modalContenido.appendChild(listaClonada);
    //boton cerrar
    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "X";
    botonCerrar.classList.add("boton-cerrar");
    botonCerrar.id = "cerrar-modal";

    modalContenido.appendChild(botonCerrar);
    //evento
    botonCerrar.addEventListener("click", function () {
        modalCarrito.style.display = "none"; // Cierra el modal al hacer clic en "X"
      });

    modalCarrito.style.display = "block"; // Muestra el modal
  }


const iconoCarrito = document.getElementById("carrito-icon");
const modalCarrito = document.getElementById("modal-carrito");

iconoCarrito.addEventListener("click", function () {
  modalCarrito.style.display = "block"; // Muestra el modal al hacer clic
  actualizarModalCarrito()
});


  


//cards
const cardConteiner = document.querySelector("#card-container")

for (const producto of productos) {
    let card = document.createElement("div");
    card.classList.add("card");
  
    let cardImg = document.createElement("img");
    cardImg.src = producto.img;
    cardImg.classList.add("card-img");
  
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = producto.title;
  
    let cardBody = document.createElement("p");
    cardBody.classList.add("card-body");
    cardBody.innerText = producto.descripcion;

    let cardPrice = document.createElement("h4");
    cardPrice.classList.add("card-price");
    cardPrice.innerText = producto.price
  
    let cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerText = "Agregar al carrito";

    cardButton.addEventListener("click", function(){
        agregarAlCarrito(producto)
        actualizarModalCarrito()
    })
  
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardPrice);
    card.appendChild(cardButton);
  
    cardConteiner.appendChild(card);
  }

//formulario


/* let card = document.createElement("div")
card.classList.add("card")

let cardImg = document.createElement("img")
cardImg.src = "./img/imgstanley/descarga.jpeg"
cardImg.classList.add("card-img")

let cardTitle = document.createElement("h3")
cardTitle.classList.add("card-title")
cardTitle.innerText = "Termo Classic Negro Stanley"

let cardBody = document.createElement("p")
cardBody.classList.add("card-body")
cardBody.innerText = "Termo classic negro de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"

let cardButton = document.createElement("button")
cardButton.classList.add("card-button")
cardButton.innerText = "Agregar al carrito"

card.appendChild(cardImg)
card.appendChild(cardTitle)
card.appendChild(cardBody)
card.appendChild(cardButton)
cardConteiner.appendChild(card) */
//2

/* let card2 = document.createElement("div")
card2.classList.add("card")

let cardImg2 = document.createElement("img")
cardImg2.src = "./img/imgstanley/descarga.jpeg"
cardImg2.classList.add("card-img")

let cardTitle2 = document.createElement("h3")
cardTitle2.classList.add("card-title")
cardTitle2.innerText = "Termo Classic Negro Stanley"

let cardBody2 = document.createElement("p")
cardBody2.classList.add("card-body")
cardBody2.innerText = "Termo classic negro de acero inoxidable, mantiene la bebida caliente por 24hs y fria 36hs"

let cardButton2 = document.createElement("button")
cardButton2.classList.add("card-button")
cardButton2.innerText = "Agregar al carrito"


card2.appendChild(cardImg2)
card2.appendChild(cardTitle2)
card2.appendChild(cardBody2)
card2.appendChild(cardButton2)
cardConteiner.appendChild(card2) */